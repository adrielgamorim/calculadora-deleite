import { useEffect, useState } from "react";
import { getDocuments } from "@requests/requests";
import { Endpoints } from "@data/Endpoints";
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import type { Cake } from "@models/Cake";
import { Frames } from "@data/Frames";
import { helpers } from "@helpers/helpers";
import "@styles/DashboardOverview.css";

interface CakeWithPrice {
  cake: Cake;
  wholePrice: number;
}

export function DashboardOverview() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [bundles, setBundles] = useState<Bundle[]>([]);
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getDocuments<Ingredient>(Endpoints.ingredients),
      getDocuments<Bundle>(Endpoints.bundles),
      getDocuments<Cake>(Endpoints.cakes)
    ]).then(async ([ingredientsData, bundlesData, cakesData]) => {
      setIngredients(ingredientsData);
      setBundles(bundlesData);
      const hydratedCakes = await helpers.pullCakesWithIngredients(cakesData);
      setCakes(hydratedCakes);
      setLoading(false);
    });
  }, []);

  function calculateCakePrice(cake: Cake): number {
    // Simplified calculation - uses basic pricing logic
    let basePrice = 0;

    // Add direct ingredients
    if (cake.hydratedIngredients) {
      cake.hydratedIngredients.forEach(hydrated => {
        const ingredient = hydrated.ingredient;
        const pricePerUnit = ingredient.price / ingredient.quantity;
        basePrice += pricePerUnit * hydrated.quantity;
      });
    }

    // Add bundle ingredients
    if (cake.hydratedBundles) {
      cake.hydratedBundles.forEach(hydratedBundle => {
        hydratedBundle.hydratedQuantities?.forEach(hydrated => {
          const ingredient = hydrated.ingredient;
          const pricePerUnit = ingredient.price / ingredient.quantity;
          basePrice += pricePerUnit * hydrated.quantity;
        });
      });
    }

    // Add packaging (simplified - hardcoded values)
    const packagingCosts: { [key: string]: number } = {
      [Frames.frame15]: 5,
      [Frames.frame25]: 8,
      [Frames.frame35]: 12
    };
    basePrice += packagingCosts[cake.frame as string] || 0;

    // Apply conversion rate (simplified - hardcoded 40%)
    const conversionRate = 40;
    const finalPrice = basePrice / (1 - (conversionRate / 100));

    return finalPrice;
  }

  function getTop3MostExpensiveCakes(): CakeWithPrice[] {
    const cakesWithPrices: CakeWithPrice[] = cakes.map(cake => ({
      cake,
      wholePrice: calculateCakePrice(cake)
    }));

    return cakesWithPrices
      .sort((a, b) => b.wholePrice - a.wholePrice)
      .slice(0, 3);
  }

  function getAveragePrice(): number {
    if (cakes.length === 0) return 0;
    const total = cakes.reduce((sum, cake) => sum + calculateCakePrice(cake), 0);
    return total / cakes.length;
  }

  function getMostUsedIngredients(): Array<{ ingredient: Ingredient; count: number }> {
    const ingredientUsage = new Map<string, number>();

    cakes.forEach(cake => {
      // Count direct ingredients
      cake.hydratedIngredients?.forEach(hydrated => {
        const id = hydrated.ingredient.id!;
        ingredientUsage.set(id, (ingredientUsage.get(id) || 0) + 1);
      });

      // Count bundle ingredients
      cake.hydratedBundles?.forEach(hydratedBundle => {
        hydratedBundle.hydratedQuantities?.forEach(hydrated => {
          const id = hydrated.ingredient.id!;
          ingredientUsage.set(id, (ingredientUsage.get(id) || 0) + 1);
        });
      });
    });

    const usageArray = Array.from(ingredientUsage.entries()).map(([id, count]) => {
      const ingredient = ingredients.find(i => i.id === id);
      return ingredient ? { ingredient, count } : null;
    }).filter((item): item is { ingredient: Ingredient; count: number } => item !== null);

    return usageArray.sort((a, b) => b.count - a.count).slice(0, 3);
  }

  function getMostUsedBundles(): Array<{ bundle: Bundle; count: number }> {
    const bundleUsage = new Map<string, number>();

    cakes.forEach(cake => {
      cake.hydratedBundles?.forEach(hydratedBundle => {
        const id = hydratedBundle.id;
        bundleUsage.set(id, (bundleUsage.get(id) || 0) + 1);
      });
    });

    const usageArray = Array.from(bundleUsage.entries()).map(([id, count]) => {
      const bundle = bundles.find(b => b.id === id);
      return bundle ? { bundle, count } : null;
    }).filter((item): item is { bundle: Bundle; count: number } => item !== null);

    return usageArray.sort((a, b) => b.count - a.count).slice(0, 3);
  }

  function getPriceRange(): { min: number; max: number; diff: number } {
    if (cakes.length === 0) return { min: 0, max: 0, diff: 0 };
    
    const prices = cakes.map(cake => calculateCakePrice(cake));
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    
    return { min, max, diff: max - min };
  }

  function getFrameDistribution(): Array<{ frame: string; count: number; percentage: number }> {
    const distribution: { [key: string]: number } = {
      [Frames.frame15]: 0,
      [Frames.frame25]: 0,
      [Frames.frame35]: 0
    };

    cakes.forEach(cake => {
      distribution[cake.frame as string]++;
    });

    const total = cakes.length || 1;

    return [
      { frame: "15cm", count: distribution[Frames.frame15], percentage: (distribution[Frames.frame15] / total) * 100 },
      { frame: "25cm", count: distribution[Frames.frame25], percentage: (distribution[Frames.frame25] / total) * 100 },
      { frame: "35cm", count: distribution[Frames.frame35], percentage: (distribution[Frames.frame35] / total) * 100 }
    ];
  }

  function getFrameName(frame: Frames): string {
    switch (frame) {
      case Frames.frame15:
        return "15cm";
      case Frames.frame25:
        return "25cm";
      case Frames.frame35:
        return "35cm";
      default:
        return "Desconhecido";
    }
  }

  if (loading) {
    return <div className="dashboard-overview"><p>Carregando...</p></div>;
  }

  const top3Cakes = getTop3MostExpensiveCakes();
  const mostUsedIngredients = getMostUsedIngredients();
  const mostUsedBundles = getMostUsedBundles();
  const priceRange = getPriceRange();
  const frameDistribution = getFrameDistribution();

  return (
    <div className="dashboard-overview">
      <h1>Visão Geral</h1>

      {/* Metrics Section */}
      <div className="metrics-section">
        <div className="metric-card">
          <div className="metric-icon">🥚</div>
          <div className="metric-label">Ingredientes</div>
          <div className="metric-value">{ingredients.length}</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🎁</div>
          <div className="metric-label">Conjuntos</div>
          <div className="metric-value">{bundles.length}</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🎂</div>
          <div className="metric-label">Bolos</div>
          <div className="metric-value">{cakes.length}</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">💰</div>
          <div className="metric-label">Preço Médio</div>
          <div className="metric-value">R$ {helpers.humanizePrice(getAveragePrice())}</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Top 3 Cakes */}
        <div className="stats-box">
          <h2>Top 3 Bolos Mais Caros</h2>
          {top3Cakes.length === 0 ? (
            <p>Nenhum bolo cadastrado</p>
          ) : (
            <div className="top-cakes-list">
              {top3Cakes.map((item, index) => (
                <div key={item.cake.id} className="cake-item">
                  <span className="medal">{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</span>
                  <div className="cake-info">
                    <span className="cake-name">{item.cake.name}</span>
                    <span className="cake-details">
                      {getFrameName(item.cake.frame)} - R$ {helpers.humanizePrice(item.wholePrice)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="stats-column">
          {/* Most Used Ingredients */}
          <div className="stats-box">
            <h2>Ingredientes Mais Usados</h2>
            {mostUsedIngredients.length === 0 ? (
              <p>Nenhum ingrediente usado ainda</p>
            ) : (
              <ul className="ingredient-list">
                {mostUsedIngredients.map(item => (
                  <li key={item.ingredient.id}>
                    {item.ingredient.name} ({item.count} {item.count === 1 ? 'bolo' : 'bolos'})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Most Used Bundles */}
          <div className="stats-box">
            <h2>Conjuntos Mais Usados</h2>
            {mostUsedBundles.length === 0 ? (
              <p>Nenhum conjunto usado ainda</p>
            ) : (
              <ul className="ingredient-list">
                {mostUsedBundles.map(item => (
                  <li key={item.bundle.id}>
                    {item.bundle.name} ({item.count} {item.count === 1 ? 'bolo' : 'bolos'})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Price Range */}
          <div className="stats-box">
            <h2>Faixa de Preços</h2>
            {cakes.length === 0 ? (
              <p>Nenhum bolo cadastrado</p>
            ) : (
              <div className="price-range">
                <div className="price-item">
                  <span className="price-label">Mais barato:</span>
                  <span className="price-value">R$ {helpers.humanizePrice(priceRange.min)}</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Mais caro:</span>
                  <span className="price-value">R$ {helpers.humanizePrice(priceRange.max)}</span>
                </div>
                <div className="price-item">
                  <span className="price-label">Diferença:</span>
                  <span className="price-value">R$ {helpers.humanizePrice(priceRange.diff)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Frame Distribution */}
          <div className="stats-box">
            <h2>Distribuição por Tamanho</h2>
            {cakes.length === 0 ? (
              <p>Nenhum bolo cadastrado</p>
            ) : (
              <div className="frame-distribution">
                {frameDistribution.map(item => (
                  <div key={item.frame} className="frame-item">
                    <span className="frame-label">{item.frame}:</span>
                    <span className="frame-value">
                      {item.count} {item.count === 1 ? 'bolo' : 'bolos'} ({item.percentage.toFixed(0)}%)
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
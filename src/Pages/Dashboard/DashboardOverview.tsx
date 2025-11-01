import { useEffect, useState, useMemo } from "react";
import { getDocuments } from "@requests/requests";
import { Endpoints } from "@data/Endpoints";
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import type { Cake } from "@models/Cake";
import { Frames } from "@data/Frames";
import { helpers } from "@helpers/helpers";
import * as S from "./DashboardOverview.styled";

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
    let basePrice = 0;

    // Add direct ingredients
    if (cake.hydratedIngredients) {
      cake.hydratedIngredients.forEach(hydrated => {
        basePrice += helpers.calculateIngredientCost(hydrated.ingredient, hydrated.quantity);
      });
    }

    // Add bundle ingredients
    if (cake.hydratedBundles) {
      cake.hydratedBundles.forEach(hydratedBundle => {
        hydratedBundle.hydratedQuantities?.forEach(hydrated => {
          basePrice += helpers.calculateIngredientCost(hydrated.ingredient, hydrated.quantity);
        });
      });
    }

    return basePrice;
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

  // Memoize expensive calculations
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const top3Cakes = useMemo(() => getTop3MostExpensiveCakes(), [cakes]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mostUsedIngredients = useMemo(() => getMostUsedIngredients(), [cakes, ingredients]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mostUsedBundles = useMemo(() => getMostUsedBundles(), [cakes, bundles]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const priceRange = useMemo(() => getPriceRange(), [cakes]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frameDistribution = useMemo(() => getFrameDistribution(), [cakes]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const averagePrice = useMemo(() => getAveragePrice(), [cakes]);

  if (loading) {
    return <S.Container><p>Carregando...</p></S.Container>;
  }

  return (
    <S.Container>
      <h1>Visão Geral</h1>

      {/* Metrics Section */}
      <S.MetricsSection>
        <S.MetricCard>
          <S.MetricIcon>🥚</S.MetricIcon>
          <S.MetricLabel>Ingredientes</S.MetricLabel>
          <S.MetricValue>{ingredients.length}</S.MetricValue>
        </S.MetricCard>
        <S.MetricCard>
          <S.MetricIcon>🎁</S.MetricIcon>
          <S.MetricLabel>Conjuntos</S.MetricLabel>
          <S.MetricValue>{bundles.length}</S.MetricValue>
        </S.MetricCard>
        <S.MetricCard>
          <S.MetricIcon>🎂</S.MetricIcon>
          <S.MetricLabel>Bolos</S.MetricLabel>
          <S.MetricValue>{cakes.length}</S.MetricValue>
        </S.MetricCard>
        <S.MetricCard>
          <S.MetricIcon>💰</S.MetricIcon>
          <S.MetricLabel>Preço Médio</S.MetricLabel>
          <S.MetricValue>R$ {helpers.humanizePrice(averagePrice)}</S.MetricValue>
        </S.MetricCard>
      </S.MetricsSection>

      {/* Content Section */}
      <S.ContentSection>
        {/* Top 3 Cakes */}
        <S.StatsBox>
          <h2>Top 3 Bolos Mais Caros</h2>
          {top3Cakes.length === 0 ? (
            <p>Nenhum bolo cadastrado</p>
          ) : (
            <S.TopCakesList>
              {top3Cakes.map((item, index) => (
                <S.CakeItem key={item.cake.id}>
                  <S.Medal>{index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}</S.Medal>
                  <S.CakeInfo>
                    <S.CakeName>{item.cake.name}</S.CakeName>
                    <S.CakeDetails>
                      {helpers.getFrameName(item.cake.frame)} - R$ {helpers.humanizePrice(item.wholePrice)}
                    </S.CakeDetails>
                  </S.CakeInfo>
                </S.CakeItem>
              ))}
            </S.TopCakesList>
          )}
        </S.StatsBox>

        {/* Stats Section */}
        <S.StatsColumn>
          {/* Most Used Ingredients */}
          <S.StatsBox>
            <h2>Ingredientes Mais Usados</h2>
            {mostUsedIngredients.length === 0 ? (
              <p>Nenhum ingrediente usado ainda</p>
            ) : (
              <S.IngredientList>
                {mostUsedIngredients.map(item => (
                  <S.IngredientItem key={item.ingredient.id}>
                    {item.ingredient.name} ({item.count} {item.count === 1 ? 'bolo' : 'bolos'})
                  </S.IngredientItem>
                ))}
              </S.IngredientList>
            )}
          </S.StatsBox>

          {/* Most Used Bundles */}
          <S.StatsBox>
            <h2>Conjuntos Mais Usados</h2>
            {mostUsedBundles.length === 0 ? (
              <p>Nenhum conjunto usado ainda</p>
            ) : (
              <S.IngredientList>
                {mostUsedBundles.map(item => (
                  <S.IngredientItem key={item.bundle.id}>
                    {item.bundle.name} ({item.count} {item.count === 1 ? 'bolo' : 'bolos'})
                  </S.IngredientItem>
                ))}
              </S.IngredientList>
            )}
          </S.StatsBox>

          {/* Price Range */}
          <S.StatsBox>
            <h2>Faixa de Preços</h2>
            {cakes.length === 0 ? (
              <p>Nenhum bolo cadastrado</p>
            ) : (
              <S.PriceRange>
                <S.PriceItem>
                  <S.PriceLabel>Mais barato:</S.PriceLabel>
                  <S.PriceValue>R$ {helpers.humanizePrice(priceRange.min)}</S.PriceValue>
                </S.PriceItem>
                <S.PriceItem>
                  <S.PriceLabel>Mais caro:</S.PriceLabel>
                  <S.PriceValue>R$ {helpers.humanizePrice(priceRange.max)}</S.PriceValue>
                </S.PriceItem>
                <S.PriceItem>
                  <S.PriceLabel>Diferença:</S.PriceLabel>
                  <S.PriceValue>R$ {helpers.humanizePrice(priceRange.diff)}</S.PriceValue>
                </S.PriceItem>
              </S.PriceRange>
            )}
          </S.StatsBox>

          {/* Frame Distribution */}
          <S.StatsBox>
            <h2>Distribuição por Tamanho</h2>
            {cakes.length === 0 ? (
              <p>Nenhum bolo cadastrado</p>
            ) : (
              <S.FrameDistribution>
                {frameDistribution.map(item => (
                  <S.FrameItem key={item.frame}>
                    <S.FrameLabel>{item.frame}:</S.FrameLabel>
                    <S.FrameValue>
                      {item.count} {item.count === 1 ? 'bolo' : 'bolos'} ({item.percentage.toFixed(0)}%)
                    </S.FrameValue>
                  </S.FrameItem>
                ))}
              </S.FrameDistribution>
            )}
          </S.StatsBox>
        </S.StatsColumn>
      </S.ContentSection>
    </S.Container>
  );
}
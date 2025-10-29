import type { Cake } from "@models/Cake";
import type { Price } from "@models/Price";
import type { Config as ConfigModel } from "@models/Config";
import { slices } from "@data/slices";
import { Frames } from "@data/Frames";
import { helpers } from "@helpers/helpers";
import { Endpoints } from "@data/Endpoints";
import { useState, useEffect } from "react";
import { Loading } from "@components/Loading";
import { getDocuments } from "@requests/requests";
import { useColumnSort } from "@hooks/useColumnSort";
import { useColumnVisibility } from "@hooks/useColumnVisibility";
import { ColumnFilterMenu } from "@components/ColumnFilterMenu";

export function DashboardCalculator() {
  const [config, setConfig] = useState<ConfigModel | null>(null);
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [prices, setPrices] = useState<Price[]>([]);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Price>(prices);

  const columns = [
    { key: 'name' as keyof Price, label: 'Nome' },
    { key: 'base' as keyof Price, label: 'Preço base' },
    { key: 'baseWithPackaging' as keyof Price, label: 'Preço com embalagem' },
    { key: 'baseSlice' as keyof Price, label: 'Preço base Fatia' },
    { key: 'baseSliceWithPackaging' as keyof Price, label: 'Preço Fatia com embalagem' },
    { key: 'converted' as keyof Price, label: 'Preço Bolo convertido' },
    { key: 'convertedWithPackaging' as keyof Price, label: 'Preço convertido com embalagem' },
    { key: 'convertedSlice' as keyof Price, label: 'Preço Fatia convertido' },
    { key: 'convertedSliceWithPackaging' as keyof Price, label: 'Preço Fatia convertido com embalagem' },
    { key: 'sellingBasePrice' as keyof Price, label: 'Preço Bolo praticado' },
    { key: 'sellingSlicePrice' as keyof Price, label: 'Preço Fatia praticado' },
    { key: 'ifoodSellingBasePrice' as keyof Price, label: 'Preço Bolo Ifood' },
    { key: 'ifoodSellingSlicePrice' as keyof Price, label: 'Preço Fatia Ifood' },
  ];

  const { visibleColumns, toggleColumn, isColumnVisible } = useColumnVisibility(
    columns.map(c => c.key as string)
  );

  useEffect(() => {
    Promise.all([
      getDocuments<ConfigModel>(Endpoints.config),
      getDocuments<Cake>(Endpoints.cakes)
    ]).then(([configData, cakesData]) => {
      setConfig(configData[0] || ((c: ConfigModel) => c));
      setCakes(cakesData);
    });
  }, []);

  useEffect(() => {
    (async () => {
      setCakes(await helpers.pullCakesWithIngredients(cakes));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  useEffect(() => {
    const pricesArray: Price[] = cakes.map(cake => {
      const base = calculateBaseCakePrice(cake);
      const baseWithPackaging = helpers.humanizePrice(calculatePriceWithPackaging(cake.frame, base));
      const baseSlice = calculateCakeSlicePrice(cake.frame, base);
      const baseSliceWithPackaging = helpers.humanizePrice(calculatePriceWithPackaging(cake.frame, baseSlice, true));
      const converted = helpers.humanizePrice(calculateConvertedPrice(base));
      const convertedWithPackaging = helpers.humanizePrice(calculateConvertedPrice(calculatePriceWithPackaging(cake.frame, base)));
      const convertedSlice = helpers.humanizePrice(calculateConvertedPrice(baseSlice));
      const convertedSliceWithPackaging = helpers.humanizePrice(calculateConvertedPrice(calculatePriceWithPackaging(cake.frame, baseSlice, true)));
      return {
        id: cake.id!,
        name: cake.name,
        base: helpers.humanizePrice(base),
        baseWithPackaging,
        baseSlice: helpers.humanizePrice(baseSlice),
        baseSliceWithPackaging,
        converted,
        convertedWithPackaging,
        convertedSlice,
        convertedSliceWithPackaging,
        sellingBasePrice: '',
        sellingSlicePrice: '',
        ifoodSellingBasePrice: '',
        ifoodSellingSlicePrice: ''
      };
    });
    setPrices(pricesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cakes]);

  function calculateIngredientCost(ingredient: { price: number; quantity: number; unit: string }, usedQuantity: number): number {
    let quantity: number = ingredient.quantity;

    // Calculate price per unit
    if (ingredient.unit === "un") {
      const singleUnitPrice = ingredient.price / quantity;
      return singleUnitPrice * usedQuantity;
    }

    // Convert kg/l to g/ml for consistent calculation
    if (ingredient.unit === "kg" || ingredient.unit === "l") {
      quantity *= 1000;
    }

    const pricePerUnit = ingredient.price / quantity;
    return pricePerUnit * usedQuantity;
  }

  function calculateBaseIngredientsPrice(cake: Cake): number {
    if (!cake.hydratedIngredients) return 0;

    return cake.hydratedIngredients.reduce((total, item) => {
      return total + calculateIngredientCost(item.ingredient, item.quantity);
    }, 0);
  }

  function calculateBaseCakePrice(cake: Cake): number {
    if (!config) {
      alert("Configurações não carregadas.");
      return 0;
    }

    // Calculate direct ingredients price
    const ingredientsPrice: number = calculateBaseIngredientsPrice(cake);

    // Calculate bundle ingredients price
    const bundlesPrice: number = cake.hydratedBundles?.reduce((total, cakeBundle) => {
      // Calculate price for each ingredient quantity in this bundle
      const bundleIngredientCost = cakeBundle.hydratedQuantities.reduce((bundleTotal, item) => {
        return bundleTotal + calculateIngredientCost(item.ingredient, item.quantity);
      }, 0);

      return total + bundleIngredientCost;
    }, 0) || 0;

    return ingredientsPrice + bundlesPrice;
  }

  function calculatePriceWithPackaging(frame: Frames, price: number, isSlicePackaging = false): number {
    if (!config) {
      alert("Configurações não carregadas.");
      return 0;
    }
    if (isSlicePackaging) return price + config.slicePackagingPrice;

    let priceWithPackaging: number;
    switch (frame) {
      case Frames.frame15:
        priceWithPackaging = price + config.frame15PackagingPrice;
        break;
      case Frames.frame25:
        priceWithPackaging = price + config.frame25PackagingPrice;
        break;
      case Frames.frame35:
        priceWithPackaging = price + config.frame35PackagingPrice;
        break;
      default:
        alert("Tamanho de bolo inválido.");
        priceWithPackaging = price;
        break;
    }
    return priceWithPackaging;
  }

  function calculateConvertedPrice(price: number): number {
    return price / (1 - ((100 - config!.conversionRate) / 100));
  }

  // function calculateIfoodPrice(price: number): number {
  //   return price / (1 - (config!.ifoodTax / 100));
  // }

  function calculateCakeSlicePrice(frame: Frames, price: number): number {
    const sliceNumber = getCakeSliceNumber(frame);
    return price / sliceNumber;
  }

  function getCakeSliceNumber(frame: Frames): number {
    return slices[frame as keyof typeof slices];
  }

  return (
    <div>
      <h1>Calculadora</h1>

      <ColumnFilterMenu
        columns={columns.map(c => ({ key: c.key as string, label: c.label }))}
        visibleColumns={visibleColumns}
        onToggle={toggleColumn}
      />

      {prices.length === 0 ? <Loading /> : (
        <table>
          <thead>
            <tr>
              {columns.filter(col => isColumnVisible(col.key as string)).map(col => (
                <th key={col.key} onClick={() => handleSort(col.key)}>
                  {col.label} {sortColumn === col.key ? (sortDirection === "asc" ? "↑" : "↓") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(priceTable => (
              <tr key={priceTable.id}>
                {columns.filter(col => isColumnVisible(col.key as string)).map(col => (
                  <td key={col.key}>
                    {col.key === 'name' ? priceTable[col.key] : `R$${priceTable[col.key]}`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

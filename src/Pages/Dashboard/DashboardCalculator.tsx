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
import { useToastContext } from "@hooks/useToastContext";

export function DashboardCalculator() {
  const [config, setConfig] = useState<ConfigModel | null>(null);
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [prices, setPrices] = useState<Price[]>([]);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Price>(prices);
  const toast = useToastContext();

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

  // Columns visible by default (hide intermediate calculation columns)
  const defaultVisibleColumns = [
    'name',
    'base',
    'baseSlice',
    'converted',
    'convertedSlice',
    'sellingBasePrice',
    'sellingSlicePrice',
    'ifoodSellingBasePrice',
    'ifoodSellingSlicePrice'
  ];

  const { visibleColumns, toggleColumn, isColumnVisible } = useColumnVisibility(
    defaultVisibleColumns
  );

  useEffect(() => {
    Promise.all([
      getDocuments<ConfigModel>(Endpoints.config),
      getDocuments<Cake>(Endpoints.cakes)
    ]).then(async ([configData, cakesData]) => {
      setConfig(configData[0] || ((c: ConfigModel) => c));
      const hydratedCakes = await helpers.pullCakesWithIngredients(cakesData);
      setCakes(hydratedCakes);
    });
  }, []);

  useEffect(() => {
    const pricesArray: Price[] = cakes.map(cake => {
      const base = calculateBaseCakePrice(cake);
      const baseWithPackaging = calculatePriceWithPackaging(cake.frame, base);
      const baseSlice = calculateCakeSlicePrice(cake.frame, base);
      const baseSliceWithPackaging = calculatePriceWithPackaging(cake.frame, baseSlice, true);
      
      // Convert base prices (without packaging)
      const converted = calculateConvertedPrice(base);
      const convertedSlice = calculateConvertedPrice(baseSlice);
      
      // Add packaging AFTER conversion (no profit on packaging)
      const convertedWithPackaging = calculatePriceWithPackaging(cake.frame, converted);
      const convertedSliceWithPackaging = calculatePriceWithPackaging(cake.frame, convertedSlice, true);
      
      // Calculate selling prices (with rounding)
      const sellingBasePrice = calculateSellingPrice(convertedWithPackaging);
      const sellingSlicePrice = calculateSellingPrice(convertedSliceWithPackaging);
      
      // Calculate Ifood prices: apply tax first, then round
      const ifoodSellingBasePrice = calculateSellingPrice(calculateIfoodPrice(convertedWithPackaging));
      const ifoodSellingSlicePrice = calculateSellingPrice(calculateIfoodPrice(convertedSliceWithPackaging));
      
      // Get frame size number only (remove "cm" suffix)
      const frameSize = helpers.getFrameName(cake.frame).replace('cm', '');
      
      return {
        id: cake.id!,
        name: `${cake.name} - Aro ${frameSize}`,
        base: helpers.humanizePrice(base),
        baseWithPackaging: helpers.humanizePrice(baseWithPackaging),
        baseSlice: helpers.humanizePrice(baseSlice),
        baseSliceWithPackaging: helpers.humanizePrice(baseSliceWithPackaging),
        converted: helpers.humanizePrice(converted),
        convertedWithPackaging: helpers.humanizePrice(convertedWithPackaging),
        convertedSlice: helpers.humanizePrice(convertedSlice),
        convertedSliceWithPackaging: helpers.humanizePrice(convertedSliceWithPackaging),
        sellingBasePrice: helpers.humanizePrice(sellingBasePrice),
        sellingSlicePrice: helpers.humanizePrice(sellingSlicePrice),
        ifoodSellingBasePrice: helpers.humanizePrice(ifoodSellingBasePrice),
        ifoodSellingSlicePrice: helpers.humanizePrice(ifoodSellingSlicePrice)
      };
    });
    setPrices(pricesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cakes]);

  function calculateBaseIngredientsPrice(cake: Cake): number {
    if (!cake.hydratedIngredients) return 0;

    return cake.hydratedIngredients.reduce((total, item) => {
      return total + helpers.calculateIngredientCost(item.ingredient, item.quantity);
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
        return bundleTotal + helpers.calculateIngredientCost(item.ingredient, item.quantity);
      }, 0);

      return total + bundleIngredientCost;
    }, 0) || 0;

    return ingredientsPrice + bundlesPrice;
  }

  function calculatePriceWithPackaging(frame: Frames, price: number, isSlicePackaging = false): number {
    if (!config) {
      toast.error("Configurações não carregadas.");
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
        toast.error("Tamanho de bolo inválido.");
        priceWithPackaging = price;
        break;
    }
    return priceWithPackaging;
  }

  function calculateConvertedPrice(price: number): number {
    return price / (1 - ((100 - config!.conversionRate) / 100));
  }

  function calculateSellingPrice(convertedWithPackaging: number): number {
    if (!config || config.roundingStrategy === "none") {
      return convertedWithPackaging;
    }

    const integerPart = Math.floor(convertedWithPackaging);

    if (config.roundingStrategy === "to_90") {
      // Round to nearest .90
      const previousTarget = integerPart - 0.10;
      const nextTarget = integerPart + 0.90;
      
      const distanceToPrevious = Math.abs(convertedWithPackaging - previousTarget);
      const distanceToNext = Math.abs(convertedWithPackaging - nextTarget);
      
      return distanceToPrevious < distanceToNext ? previousTarget : nextTarget;
      
    } else if (config.roundingStrategy === "to_50") {
      // Round to nearest .50
      const currentTarget = integerPart + 0.50;
      const nextTarget = integerPart + 1.50;
      
      const distanceToCurrent = Math.abs(convertedWithPackaging - currentTarget);
      const distanceToNext = Math.abs(convertedWithPackaging - nextTarget);
      
      return distanceToCurrent < distanceToNext ? currentTarget : nextTarget;
      
    } else if (config.roundingStrategy === "to_integer") {
      // Round to nearest integer
      return Math.round(convertedWithPackaging);
    }

    return convertedWithPackaging;
  }

  function calculateIfoodPrice(sellingPrice: number): number {
    if (!config) {
      return sellingPrice;
    }
    // Apply Ifood tax and round up to nearest cent
    return helpers.ceilDecimal(sellingPrice * (1 + config.ifoodTax / 100));
  }

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

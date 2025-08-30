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
import { useColumnSort } from "@helpers/useColumnSort";

export function DashboardCalculator() {
  const [config, setConfig] = useState<ConfigModel | null>(null);
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [prices, setPrices] = useState<Price[]>([]);
  const { data, sortColumn, sortDirection, handleSort } = useColumnSort<Price>(prices);

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

  function calculateBaseIngredientsPrice(cake: Cake, ingredients: typeof cake.ingredients = []) {
    return ingredients?.reduce((total, ingredient) => {
      let quantity: number = ingredient.quantity;
      let unit: string = ingredient.unit;
      let usedInFrame: number;

      switch (cake.frame) {
        case Frames.frame15:
          usedInFrame = ingredient.used_in_frame_15;
          break;
        case Frames.frame25:
          usedInFrame = ingredient.used_in_frame_25;
          break;
        case Frames.frame35:
          usedInFrame = ingredient.used_in_frame_35;
          break;
        default:
          usedInFrame = 0;
          break;
      }

      if (unit === "un") {
        const singleUnitPrice = ingredient.price / quantity;
        return total + singleUnitPrice * usedInFrame;
      }

      if (unit === "kg" || unit === "ml") {
        quantity *= 1000;
        unit = unit.charAt(1);
      }

      const pricePerUnit = ingredient.price / quantity;
      return total + pricePerUnit * usedInFrame;
    }, 0);
  }

  function calculateBaseCakePrice(cake: Cake): number {
    if (!config) {
      alert("Configurações não carregadas.");
      return 0;
    }

    const ingredientsPrice: number = calculateBaseIngredientsPrice(cake, cake.ingredients) || 0;
    const bundlesPrices: number[] = cake.bundles?.map(bundle => {
      return calculateBaseIngredientsPrice(cake, bundle.ingredients);
    }) || [0];
    const bundlesPrice: number = bundlesPrices.reduce((total, price) => total + price, 0);

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
      {prices.length === 0 ? <Loading /> : (
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>
                Nome {sortColumn === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("base")}>
                Preço base {sortColumn === "base" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("baseWithPackaging")}>
                Preço com embalagem {sortColumn === "baseWithPackaging" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("baseSlice")}>
                Preço base Fatia {sortColumn === "baseSlice" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("baseSliceWithPackaging")}>
                Preço Fatia com embalagem {sortColumn === "baseSliceWithPackaging" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("converted")}>
                Preço Bolo convertido {sortColumn === "converted" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("convertedWithPackaging")}>
                Preço convertido com embalagem {sortColumn === "convertedWithPackaging" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("convertedSlice")}>
                Preço Fatia convertido {sortColumn === "convertedSlice" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("convertedSliceWithPackaging")}>
                Preço Fatia convertido com embalagem {sortColumn === "convertedSliceWithPackaging" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("sellingBasePrice")}>
                Preço Bolo praticado {sortColumn === "sellingBasePrice" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("sellingSlicePrice")}>
                Preço Fatia praticado {sortColumn === "sellingSlicePrice" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("ifoodSellingBasePrice")}>
                Preço Bolo Ifood {sortColumn === "ifoodSellingBasePrice" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
              <th onClick={() => handleSort("ifoodSellingSlicePrice")}>
                Preço Fatia Ifood {sortColumn === "ifoodSellingSlicePrice" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(priceTable => (
              <tr key={priceTable.id}>
                <td>{priceTable.name}</td>
                <td>R${priceTable.base}</td>
                <td>R${priceTable.baseWithPackaging}</td>
                <td>R${priceTable.baseSlice}</td>
                <td>R${priceTable.baseSliceWithPackaging}</td>
                <td>R${priceTable.converted}</td>
                <td>R${priceTable.convertedWithPackaging}</td>
                <td>R${priceTable.convertedSlice}</td>
                <td>R${priceTable.convertedSliceWithPackaging}</td>
                <td>R${priceTable.sellingBasePrice}</td>
                <td>R${priceTable.sellingSlicePrice}</td>
                <td>R${priceTable.ifoodSellingBasePrice}</td>
                <td>R${priceTable.ifoodSellingSlicePrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

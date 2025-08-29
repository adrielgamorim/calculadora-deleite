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

export function DashboardCalculator() {
  const [config, setConfig] = useState<ConfigModel | null>(null);
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    const fetchConfig = async () => {
      setConfig(await getDocuments<ConfigModel>(Endpoints.config).then(data => data[0] || ((c: ConfigModel) => c)));
      setCakes(await getDocuments<Cake>(Endpoints.cakes));

      const pricesArray: Price[] = [];
      cakes.forEach(cake => {
        const base = calculateBaseCakePrice(cake);
        const baseWithPackaging = helpers.humanizePrice(calculatePriceWithPackaging(cake.frame, base));
        const baseSlice = calculateCakeSlicePrice(cake.frame, base);
        const baseSliceWithPackaging = helpers.humanizePrice(calculatePriceWithPackaging(cake.frame, baseSlice, true));
        const converted = helpers.humanizePrice(calculateConvertedPrice(base));
        const convertedWithPackaging = helpers.humanizePrice(calculateConvertedPrice(calculatePriceWithPackaging(cake.frame, base)));
        const convertedSlice = helpers.humanizePrice(calculateConvertedPrice(baseSlice));
        const convertedSliceWithPackaging = helpers.humanizePrice(calculateConvertedPrice(calculatePriceWithPackaging(cake.frame, baseSlice, true)));
        pricesArray.push({
          id: cake.id!,
          name: cake.name,
          base: helpers.humanizePrice(base),
          baseWithPackaging: baseWithPackaging,
          baseSlice: helpers.humanizePrice(baseSlice),
          baseSliceWithPackaging: baseSliceWithPackaging,
          converted: converted,
          convertedWithPackaging: convertedWithPackaging,
          convertedSlice: convertedSlice,
          convertedSliceWithPackaging: convertedSliceWithPackaging,
          sellingBasePrice: '',
          sellingSlicePrice: '',
          ifoodSellingBasePrice: '',
          ifoodSellingSlicePrice: ''
        });
      });
      setPrices(pricesArray);
    };
    fetchConfig();
  });

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
        return total + ingredient.price * usedInFrame;
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
    switch(frame) {
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
              <th>Nome</th>
              <th>Preço base</th>
              <th>Preço com embalagem</th>
              <th>Preço base Fatia</th>
              <th>Preço Fatia com embalagem</th>
              <th>Preço Bolo convertido</th>
              <th>Preço convertido com embalagem</th>
              <th>Preço Fatia convertido</th>
              <th>Preço Fatia convertido com embalagem</th>
              <th>Preço Bolo praticado</th>
              <th>Preço Fatia praticado</th>
              <th>Preço Bolo Ifood</th>
              <th>Preço Fatia Ifood</th>
            </tr>
          </thead>
          <tbody>
            {prices.map(priceTable => (
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

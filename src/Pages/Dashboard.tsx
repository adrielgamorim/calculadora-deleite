import { useState, useEffect } from "react";
import type { Config as ConfigModel } from "@models/Config";
import { getDocuments } from "@requests/requests";
import { endpoints } from "@data/endpoints";
import type { Sweet } from "@models/Sweet";
import { Frames } from "@data/Frames";
import { Button } from "@components/Button";

export function Dashboard() {
  const [config, setConfig] = useState<ConfigModel | null>(null);
  const [sweets, setSweets] = useState<Sweet[]>([]);

  useEffect(() => {
    const fetchConfig = async () => {
      setConfig(await getDocuments<ConfigModel>(endpoints.config).then(data => data[0] || ((c: ConfigModel) => c)));
      setSweets(await getDocuments<Sweet>(endpoints.sweets));
    };
    fetchConfig();
  }, []);

  async function calculateBaseSweetPrice(sweet: Sweet) {
    if (!config) {
      alert("Configurações não carregadas.");
      return;
    }

    function calculateIngredientsPrice(frame: Frames, ingredients: typeof sweet.ingredients = []) {
      return ingredients?.reduce((total, ingredient) => {
        let quantity = ingredient.quantity;
        let unit = ingredient.unit;

        if (unit === "kg") {
          quantity *= 1000;
          unit = "g";
        }
        if (unit === "l") {
          quantity *= 1000;
          unit = "ml";
        }

        const usedInFrame =
          frame === Frames.frame15 ? ingredient.used_in_frame_15 :
            frame === Frames.frame25 ? ingredient.used_in_frame_25 :
              frame === Frames.frame35 ? ingredient.used_in_frame_35 : 0;

        if (unit === "un") {
          return total + quantity * usedInFrame;
        }

        const pricePerUnit = ingredient.price / quantity;
        return total + pricePerUnit * usedInFrame;
      }, 0);
    }

    const ingredientsPrice = calculateIngredientsPrice(sweet.frame, sweet.ingredients);

    const bundlesPrices: number[] = sweet.bundles?.map(bundle => {
      return calculateIngredientsPrice(sweet.frame, bundle.ingredients);
    }) || [];
    const bundlesPrice = bundlesPrices.reduce((total, price) => total + price, 0);

    return ingredientsPrice + bundlesPrice;
  }

  return (
    <div>
      <h1>Bem vindo ao Dashboard</h1>
      <p>Aqui você pode visualizar os preços dos produtos e outras informações relevantes.</p>
      <Button label="Calcular Preços dos Bolos" onClick={() => {
        console.log("Bolo 1:", calculateBaseSweetPrice(sweets[0]));
        console.log("Bolo 2:", calculateBaseSweetPrice(sweets[1]));
      }} />
    </div>
  );
}
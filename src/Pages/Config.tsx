import { useState, useEffect } from "react";
import type { Config as ConfigModel } from "@models/Config";
import { getDocuments, addDocument, updateDocument } from "@requests/requests";
import { Endpoints } from "@data/Endpoints";
import { helpers } from "@helpers/helpers";
import { useToastContext } from "@hooks/useToastContext";

export function Config() {
  const [config, setConfig] = useState<ConfigModel>({
    name: "Configurações",
    conversionRate: 1.0,
    frame15PackagingPrice: 0.0,
    frame25PackagingPrice: 0.0,
    frame35PackagingPrice: 0.0,
    slicePackagingPrice: 0.0,
    ifoodTax: 0.0,
    roundingStrategy: "none",
  });
  const toast = useToastContext();

  useEffect(() => {
    Promise.resolve(
      getDocuments<ConfigModel>(Endpoints.config)
    ).then(data => setConfig(data[0] || ((c: ConfigModel) => c)));
  }, []);

  async function getNewConfigValues(): Promise<ConfigModel> {
    return {
      name: config.name,
      conversionRate: helpers.parseDecimal((document.getElementById("conversion-rate") as HTMLInputElement).value),
      frame15PackagingPrice: helpers.parseDecimal((document.getElementById("frame15-packaging-price") as HTMLInputElement).value),
      frame25PackagingPrice: helpers.parseDecimal((document.getElementById("frame25-packaging-price") as HTMLInputElement).value),
      frame35PackagingPrice: helpers.parseDecimal((document.getElementById("frame35-packaging-price") as HTMLInputElement).value),
      slicePackagingPrice: helpers.parseDecimal((document.getElementById("slice-packaging-price") as HTMLInputElement).value),
      ifoodTax: helpers.parseDecimal((document.getElementById("ifood-fee") as HTMLInputElement).value),
      roundingStrategy: (document.getElementById("rounding-strategy") as HTMLSelectElement).value as ConfigModel["roundingStrategy"],
    };
  }

  async function handleSaveConfig(): Promise<void> {
    const newConfig = await getNewConfigValues();
    if (isNaN(newConfig.conversionRate)) newConfig.conversionRate = config.conversionRate;
    if (isNaN(newConfig.frame15PackagingPrice)) newConfig.frame15PackagingPrice = config.frame15PackagingPrice;
    if (isNaN(newConfig.frame25PackagingPrice)) newConfig.frame25PackagingPrice = config.frame25PackagingPrice;
    if (isNaN(newConfig.frame35PackagingPrice)) newConfig.frame35PackagingPrice = config.frame35PackagingPrice;
    if (isNaN(newConfig.slicePackagingPrice)) newConfig.slicePackagingPrice = config.slicePackagingPrice;
    if (isNaN(newConfig.ifoodTax)) newConfig.ifoodTax = config.ifoodTax;
    if (config.id) {
      await updateDocument<ConfigModel>(Endpoints.config, config.id, newConfig);
    } else {
      await addDocument<ConfigModel>(Endpoints.config, newConfig);
    }
    setConfig(newConfig);
    toast.success("Configurações salvas com sucesso!");
  }

  return (
    <div>
      <h1>Configurações</h1>
      <form id="config-form" onSubmit={() => { handleSaveConfig() }}>
        <div className="form-group">
          <label htmlFor="conversion-rate">Taxa de conversão: </label>
          <input
            type="text"
            id="conversion-rate"
            name="conversion-rate"
            placeholder={config.conversionRate.toString()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ifood-fee">Taxa do iFood: </label>
          <input
            type="text"
            id="ifood-fee"
            name="ifood-fee"
            placeholder={config.ifoodTax.toString()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rounding-strategy">Estratégia de arredondamento: </label>
          <select
            id="rounding-strategy"
            name="rounding-strategy"
            value={config.roundingStrategy}
            onChange={(e) => setConfig({ ...config, roundingStrategy: e.target.value as ConfigModel["roundingStrategy"] })}
          >
            <option value="none">Nenhum</option>
            <option value="to_90">Arredondar para .90</option>
            <option value="to_50">Arredondar para .50</option>
            <option value="to_integer">Arredondar para inteiro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="frame15-packaging-price">Valor da embalagem aro 15: </label>
          <input
            type="text"
            id="frame15-packaging-price"
            name="frame15-packaging-price"
            placeholder={config.frame15PackagingPrice.toString()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="frame25-packaging-price">Valor da embalagem aro 25: </label>
          <input
            type="text"
            id="frame25-packaging-price"
            name="frame25-packaging-price"
            placeholder={config.frame25PackagingPrice.toString()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="frame35-packaging-price">Valor da embalagem aro 35: </label>
          <input
            type="text"
            id="frame35-packaging-price"
            name="frame35-packaging-price"
            placeholder={config.frame35PackagingPrice.toString()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="slice-packaging-price">Valor da embalagem fatia: </label>
          <input
            type="text"
            id="slice-packaging-price"
            name="slice-packaging-price"
            placeholder={config.slicePackagingPrice.toString()}
          />
        </div>

        <button type="submit">Salvar Configurações</button>
      </form>
    </div>
  );
}
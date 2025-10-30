import { useState, useEffect } from "react";
import type { Config as ConfigModel } from "@models/Config";
import { getDocuments, addDocument, updateDocument } from "@requests/requests";
import { Endpoints } from "@data/Endpoints";
import { helpers } from "@helpers/helpers";
import { useToastContext } from "@hooks/useToastContext";
import { Modal } from "@components/Modal";
import "@styles/AddItemForm.css";

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfigModal({ isOpen, onClose }: ConfigModalProps) {
  const [savedConfig, setSavedConfig] = useState<ConfigModel | null>(null);
  const [formData, setFormData] = useState({
    conversionRate: "",
    frame15PackagingPrice: "",
    frame25PackagingPrice: "",
    frame35PackagingPrice: "",
    slicePackagingPrice: "",
    ifoodTax: "",
    roundingStrategy: "none" as ConfigModel["roundingStrategy"]
  });
  const toast = useToastContext();

  useEffect(() => {
    if (isOpen) {
      loadConfig();
    }
  }, [isOpen]);

  async function loadConfig() {
    const data = await getDocuments<ConfigModel>(Endpoints.config);
    const config = data[0] || {
      name: "Configurações",
      conversionRate: 1.0,
      frame15PackagingPrice: 0.0,
      frame25PackagingPrice: 0.0,
      frame35PackagingPrice: 0.0,
      slicePackagingPrice: 0.0,
      ifoodTax: 0.0,
      roundingStrategy: "none" as ConfigModel["roundingStrategy"]
    };
    
    setSavedConfig(config);
    setFormData({
      conversionRate: config.conversionRate.toString().replace('.', ','),
      frame15PackagingPrice: config.frame15PackagingPrice.toString().replace('.', ','),
      frame25PackagingPrice: config.frame25PackagingPrice.toString().replace('.', ','),
      frame35PackagingPrice: config.frame35PackagingPrice.toString().replace('.', ','),
      slicePackagingPrice: config.slicePackagingPrice.toString().replace('.', ','),
      ifoodTax: config.ifoodTax.toString().replace('.', ','),
      roundingStrategy: config.roundingStrategy
    });
  }

  function handleInputChange(field: keyof typeof formData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    if (!savedConfig) return;

    const newConfig: ConfigModel = {
      name: savedConfig.name,
      conversionRate: helpers.parseDecimal(formData.conversionRate),
      frame15PackagingPrice: helpers.parseDecimal(formData.frame15PackagingPrice),
      frame25PackagingPrice: helpers.parseDecimal(formData.frame25PackagingPrice),
      frame35PackagingPrice: helpers.parseDecimal(formData.frame35PackagingPrice),
      slicePackagingPrice: helpers.parseDecimal(formData.slicePackagingPrice),
      ifoodTax: helpers.parseDecimal(formData.ifoodTax),
      roundingStrategy: formData.roundingStrategy
    };

    // Validação NaN simplificada com loop
    const numberFields: (keyof ConfigModel)[] = [
      'conversionRate', 'frame15PackagingPrice', 'frame25PackagingPrice',
      'frame35PackagingPrice', 'slicePackagingPrice', 'ifoodTax'
    ];
    
    numberFields.forEach(field => {
      const value = newConfig[field];
      if (typeof value === 'number' && isNaN(value)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (newConfig as any)[field] = savedConfig[field];
      }
    });

    // Salvar no Firebase
    if (savedConfig.id) {
      await updateDocument(Endpoints.config, savedConfig.id, newConfig);
    } else {
      const newId = await addDocument(Endpoints.config, newConfig);
      newConfig.id = newId;
    }
    
    setSavedConfig(newConfig);
    toast.success("Configurações salvas com sucesso!");
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="⚙️ Configurações"
      size="small"
    >
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="form-group">
          <label htmlFor="conversion-rate">Taxa de conversão (%)</label>
          <input
            type="text"
            id="conversion-rate"
            value={formData.conversionRate}
            onChange={(e) => handleInputChange('conversionRate', e.target.value)}
            placeholder="Ex: 30"
          />
          <small>Margem de lucro aplicada sobre o custo base</small>
        </div>

        <div className="form-group">
          <label htmlFor="ifood-tax">Taxa do iFood (%)</label>
          <input
            type="text"
            id="ifood-tax"
            value={formData.ifoodTax}
            onChange={(e) => handleInputChange('ifoodTax', e.target.value)}
            placeholder="Ex: 15"
          />
          <small>Taxa cobrada pela plataforma de delivery</small>
        </div>

        <div className="form-group">
          <label htmlFor="rounding-strategy">Estratégia de arredondamento</label>
          <select
            id="rounding-strategy"
            value={formData.roundingStrategy}
            onChange={(e) => handleInputChange('roundingStrategy', e.target.value as ConfigModel["roundingStrategy"])}
          >
            <option value="none">Nenhum</option>
            <option value="to_90">Arredondar para .90</option>
            <option value="to_50">Arredondar para .50</option>
            <option value="to_integer">Arredondar para inteiro</option>
          </select>
          <small>Como arredondar os preços finais</small>
        </div>

        <div className="form-group">
          <label htmlFor="frame15-packaging-price">Embalagem aro 15 (R$)</label>
          <input
            type="text"
            id="frame15-packaging-price"
            value={formData.frame15PackagingPrice}
            onChange={(e) => handleInputChange('frame15PackagingPrice', e.target.value)}
            placeholder="Ex: 5,00"
          />
        </div>

        <div className="form-group">
          <label htmlFor="frame25-packaging-price">Embalagem aro 25 (R$)</label>
          <input
            type="text"
            id="frame25-packaging-price"
            value={formData.frame25PackagingPrice}
            onChange={(e) => handleInputChange('frame25PackagingPrice', e.target.value)}
            placeholder="Ex: 7,00"
          />
        </div>

        <div className="form-group">
          <label htmlFor="frame35-packaging-price">Embalagem aro 35 (R$)</label>
          <input
            type="text"
            id="frame35-packaging-price"
            value={formData.frame35PackagingPrice}
            onChange={(e) => handleInputChange('frame35PackagingPrice', e.target.value)}
            placeholder="Ex: 10,00"
          />
        </div>

        <div className="form-group">
          <label htmlFor="slice-packaging-price">Embalagem fatia (R$)</label>
          <input
            type="text"
            id="slice-packaging-price"
            value={formData.slicePackagingPrice}
            onChange={(e) => handleInputChange('slicePackagingPrice', e.target.value)}
            placeholder="Ex: 1,50"
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={onClose} className="btn-secondary">
            Cancelar
          </button>
          <button type="submit" className="btn-primary">
            Salvar Configurações
          </button>
        </div>
      </form>
    </Modal>
  );
}

import "@styles/AddItemForm.css";
import { Frames } from "@data/Frames";
import { SlClose } from "react-icons/sl";
import { Button } from "@components/Button";
import Select, { type MultiValue } from 'react-select';

type CakeFormProps = {
  handleSubmit: () => Promise<void>;
  handleCloseMenu: () => void;
  handleIngredientOptionsChange: (selectedOptions: MultiValue<{ value: string; label: string }>) => void;
  getIngredientOptionsForSelect: () => { label: string; value: string }[];
  handleBundleOptionsChange: (selectedOptions: MultiValue<{ value: string; label: string }>) => void;
  getBundleOptionsForSelect: () => { label: string; value: string }[];
};

export function CakeForm({
  handleSubmit,
  handleCloseMenu,
  handleIngredientOptionsChange,
  getIngredientOptionsForSelect,
  getBundleOptionsForSelect,
  handleBundleOptionsChange
}: CakeFormProps) {
  return (
    <>
      <form id="form">
        <div className="form-header">
          <h3 className="form-title">Adicionar Bolo</h3>
          <Button className="form-close-button" label={<SlClose size={24} />} onClick={handleCloseMenu} />
        </div>
        <div className="form-group form-name">
          <label htmlFor="cake-name">Nome*: </label>
          <input id="cake-name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="cake-frame">Tamanho*: </label>
          <select id="cake-frame" defaultValue="">
            <option value={Frames.frame15}>15cm</option>
            <option value={Frames.frame25}>25cm</option>
            <option value={Frames.frame35}>35cm</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cake-ingredients">Ingredientes*: </label>
          <Select options={getIngredientOptionsForSelect()} onChange={handleIngredientOptionsChange} isMulti id="cake-ingredients" placeholder="Selecione" />
        </div>
        <div className="form-group">
          <label htmlFor="cake-bundles">Conjuntos*: </label>
          <Select options={getBundleOptionsForSelect()} onChange={handleBundleOptionsChange} isMulti id="cake-bundles" placeholder="Selecione" />
        </div>
        <Button label="Adicionar Bolo" onClick={handleSubmit} />
      </form>
    </>
  );
}

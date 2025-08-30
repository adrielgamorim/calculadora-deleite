import "@styles/AddItemForm.css";
import { SlClose } from "react-icons/sl";
import { Button } from "@components/Button";
import Select, { type MultiValue } from 'react-select';

type BundleFormProps = {
    handleSubmit: () => Promise<void>;
    handleCloseMenu: () => void;
    handleOptionsChange: (selectedOptions: MultiValue<{ value: string; label: string }>) => void;
    getIngredientOptionsForSelect: () => { label: string; value: string }[];
};

export function BundleForm({ handleSubmit, handleCloseMenu, handleOptionsChange, getIngredientOptionsForSelect }: BundleFormProps) {
    return (
        <form id="form">
            <div className="form-header">
                <h3 className="form-title">Adicionar Conjunto</h3>
                <Button className="form-close-button" label={<SlClose size={24} />} onClick={handleCloseMenu} />
             </div>
          <div className="form-group form-name">
            <label htmlFor="bundle-name">Nome*: </label>
            <input id="bundle-name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="bundle-ingredients">Ingredientes*: </label>
            <Select options={getIngredientOptionsForSelect()} onChange={handleOptionsChange} isMulti id="bundle-ingredients" placeholder="Selecione" />
          </div>
          <Button label="Adicionar Conjunto" onClick={handleSubmit} />
        </form>
    );
}

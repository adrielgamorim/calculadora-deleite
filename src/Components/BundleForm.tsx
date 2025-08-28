import { Button } from "@components/Button";
import { Common } from "@data/Common";
import Select, { type MultiValue } from 'react-select';

type BundleFormProps = {
    handleOnClick: () => Promise<void>;
    handleCloseMenu: () => void;
    handleOptionsChange: (selectedOptions: MultiValue<{ value: string; label: string }>) => void;
    getIngredientOptionsForSelect: () => { label: string; value: string }[];
};

export function BundleForm({ handleOnClick, handleCloseMenu, handleOptionsChange, getIngredientOptionsForSelect }: BundleFormProps) {
    return (

        <form id="bundle-form">
            <div className="bundle-form-header">
                <h3 className="bundle-form-title">Adicionar Conjunto</h3>
                 {/* <Button className="bundle-form-close-button" label={Common.deleteButtonLabel} onClick={handleCloseMenu} /> */}
             </div>
          <div className="bundle-form-group">
            <label htmlFor="bundle-name">Nome do Conjunto*: </label>
            <input id="bundle-name" type="text" />
          </div>
          <div className="bundle-form-group">
            <label htmlFor="bundle-ingredients">Ingredientes*: </label>
            <Select options={getIngredientOptionsForSelect()} onChange={handleOptionsChange} isMulti id="bundle-ingredients" placeholder="Selecione" />
          </div>
          <Button label="Adicionar Conjunto" onClick={handleOnClick} />
        </form>
    );
}
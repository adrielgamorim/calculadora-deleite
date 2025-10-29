import "@styles/AddItemForm.css";
import { SlClose } from "react-icons/sl";
import { Button } from "@components/Button";

type IngredientFormProps = {
    handleSubmit: () => Promise<void>;
    handleCloseMenu: () => void;
};

export function IngredientForm({ handleSubmit, handleCloseMenu }: IngredientFormProps) {
    return (
        <form id="form">
            <div className="form-header">
                <h3 className="form-title">Adicionar Ingrediente</h3>
                <Button className="form-close-button" label={<SlClose size={24} />} onClick={handleCloseMenu} />
            </div>
            <div className="form-group form-name">
                <label htmlFor="ingredient-name">Nome*: </label>
                <input id="ingredient-name" type="text" />
            </div>
            <div className="form-group ingredient-form-price">
                <label htmlFor="ingredient-price">Preço*: </label>
                <input id="ingredient-price" type="number" />
            </div>
            <div className="form-group ingredient-form-quantity">
                <label htmlFor="ingredient-quantity">Quantidade*: </label>
                <input id="ingredient-quantity" type="number" />
            </div>
            <div className="form-group ingredient-form-unit">
                <label htmlFor="ingredient-unit">Tipo de unidade*: </label>
                <select id="ingredient-unit" defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="l">l</option>
                    <option value="ml">ml</option>
                    <option value="un">un</option>
                </select>
            </div>
            <Button label="Adicionar Ingrediente" onClick={handleSubmit} />
        </form>
    );
}
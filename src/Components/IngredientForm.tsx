import { Button } from "@components/Button";

type IngredientFormProps = {
    handleOnClick: () => Promise<void>;
};

export function IngredientForm({ handleOnClick }: IngredientFormProps) {
    return (
        <form id="ingredient-form">
            <h3>Adicionar Ingrediente</h3>
            <div className="ingredient-form-group ingredient-form-name">
                <label htmlFor="ingredient-name">Nome do Ingrediente*: </label>
                <input id="ingredient-name" type="text" />
            </div>
            <div className="ingredient-form-group ingredient-form-price">
                <label htmlFor="ingredient-price">Preço*: </label>
                <input id="ingredient-price" type="number" />
            </div>
            <div className="ingredient-form-group ingredient-form-quantity">
                <label htmlFor="ingredient-quantity">Quantidade*: </label>
                <input id="ingredient-quantity" type="number" />
            </div>
            <div className="ingredient-form-group ingredient-form-unit">
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
            <div className="ingredient-form-group ingredient-form-frame15">
                <label htmlFor="ingredient-frame15">Qnt usada no aro 15: </label>
                <input id="ingredient-frame15" type="number" />
            </div>
            <div className="ingredient-form-group ingredient-form-frame25">
                <label htmlFor="ingredient-frame25">Qnt usada no aro 25: </label>
                <input id="ingredient-frame25" type="number" />
            </div>
            <div className="ingredient-form-group ingredient-form-frame35">
                <label htmlFor="ingredient-frame35">Qnt usada no aro 35: </label>
                <input id="ingredient-frame35" type="number" />
            </div>
            <Button label="Adicionar Ingrediente" onClick={handleOnClick} />
        </form>
    );
}
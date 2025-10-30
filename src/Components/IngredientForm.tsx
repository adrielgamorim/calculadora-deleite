import "@styles/AddItemForm.css";
import type { Ingredient } from "@models/Ingredient";
import { useEffect } from "react";

type IngredientFormProps = {
    initialValues?: Ingredient | null;
    onSubmit: () => Promise<void>;
    onCancel: () => void;
    isEditing?: boolean;
};

export function IngredientForm({ initialValues, onSubmit, onCancel, isEditing = false }: IngredientFormProps) {
    useEffect(() => {
        if (initialValues) {
            const form = document.getElementById("ingredient-form") as HTMLFormElement;
            if (form) {
                (form.elements.namedItem("ingredient-name") as HTMLInputElement).value = initialValues.name || "";
                (form.elements.namedItem("ingredient-price") as HTMLInputElement).value = initialValues.price?.toString() || "";
                (form.elements.namedItem("ingredient-quantity") as HTMLInputElement).value = initialValues.quantity?.toString() || "";
                (form.elements.namedItem("ingredient-unit") as HTMLSelectElement).value = initialValues.unit || "";
            }
        }
    }, [initialValues]);

    return (
        <form id="ingredient-form" className="modal-form">
            <div className="form-group form-name">
                <label htmlFor="ingredient-name">Nome*: </label>
                <input id="ingredient-name" name="ingredient-name" type="text" />
            </div>
            <div className="form-group ingredient-form-price">
                <label htmlFor="ingredient-price">Preço*: </label>
                <input id="ingredient-price" name="ingredient-price" type="number" step="0.01" />
            </div>
            <div className="form-group ingredient-form-quantity">
                <label htmlFor="ingredient-quantity">Quantidade*: </label>
                <input id="ingredient-quantity" name="ingredient-quantity" type="number" step="0.01" />
            </div>
            <div className="form-group ingredient-form-unit">
                <label htmlFor="ingredient-unit">Tipo de unidade*: </label>
                <select id="ingredient-unit" name="ingredient-unit" defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="l">l</option>
                    <option value="ml">ml</option>
                    <option value="un">un</option>
                </select>
            </div>
            <div className="modal-form-buttons">
                <button type="button" className="button-secondary" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="button" className="button-primary" onClick={onSubmit}>
                    {isEditing ? "Salvar Alterações" : "Adicionar Ingrediente"}
                </button>
            </div>
        </form>
    );
}
import "@styles/AddItemForm.css";
import type { Bundle } from "@models/Bundle";
import Select, { type MultiValue } from 'react-select';
import { useEffect } from "react";

type BundleFormProps = {
    initialValues?: Bundle | null;
    onSubmit: () => Promise<void>;
    onCancel: () => void;
    handleOptionsChange: (selectedOptions: MultiValue<{ value: string; label: string }>) => void;
    getIngredientOptionsForSelect: () => { label: string; value: string }[];
    selectedIngredientIds: string[];
    isEditing?: boolean;
};

export function BundleForm({ 
    initialValues, 
    onSubmit, 
    onCancel, 
    handleOptionsChange, 
    getIngredientOptionsForSelect, 
    selectedIngredientIds,
    isEditing = false 
}: BundleFormProps) {
    useEffect(() => {
        if (initialValues) {
            const form = document.getElementById("bundle-form") as HTMLFormElement;
            if (form) {
                (form.elements.namedItem("bundle-name") as HTMLInputElement).value = initialValues.name || "";
            }
        }
    }, [initialValues]);

    return (
        <form id="bundle-form" className="modal-form">
            <div className="form-group form-name">
                <label htmlFor="bundle-name">Nome*: </label>
                <input id="bundle-name" name="bundle-name" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="bundle-ingredients">Ingredientes*: </label>
                <Select 
                    options={getIngredientOptionsForSelect()} 
                    value={getIngredientOptionsForSelect().filter(opt => selectedIngredientIds.includes(opt.value))}
                    onChange={handleOptionsChange} 
                    isMulti 
                    id="bundle-ingredients" 
                    placeholder="Selecione"
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                />
            </div>
            <div className="modal-form-buttons">
                <button type="button" className="button-secondary" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="button" className="button-primary" onClick={onSubmit}>
                    {isEditing ? "Salvar Alterações" : "Adicionar Conjunto"}
                </button>
            </div>
        </form>
    );
}

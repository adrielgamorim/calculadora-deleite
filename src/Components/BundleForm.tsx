import "@styles/AddItemForm.css";
import type { Bundle } from "@models/Bundle";
import Select, { type MultiValue } from 'react-select';
import { useEffect, useState } from "react";

type BundleFormProps = {
    initialValues?: Bundle | null;
    onSubmit: (data: Bundle) => Promise<void>;
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
    const [formData, setFormData] = useState({
        name: ""
    });

    useEffect(() => {
        if (initialValues) {
            setFormData({
                name: initialValues.name || ""
            });
        }
    }, [initialValues]);

    function handleInputChange(field: keyof typeof formData, value: string) {
        setFormData(prev => ({ ...prev, [field]: value }));
    }

    async function handleSubmit() {
        await onSubmit({
            name: formData.name
        } as Bundle);
    }

    return (
        <form id="bundle-form" className="modal-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="form-group form-name">
                <label htmlFor="bundle-name">Nome*: </label>
                <input 
                    id="bundle-name" 
                    name="bundle-name" 
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
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
                <button type="submit" className="button-primary">
                    {isEditing ? "Salvar Alterações" : "Adicionar Conjunto"}
                </button>
            </div>
        </form>
    );
}

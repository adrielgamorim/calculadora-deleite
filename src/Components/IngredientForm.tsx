import "@styles/AddItemForm.css";
import type { Ingredient } from "@models/Ingredient";
import { useState, useEffect } from "react";

type IngredientFormProps = {
    initialValues?: Ingredient | null;
    onSubmit: (data: Ingredient) => Promise<void>;
    onCancel: () => void;
    isEditing?: boolean;
};

export function IngredientForm({ initialValues, onSubmit, onCancel, isEditing = false }: IngredientFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        quantity: "",
        unit: ""
    });

    useEffect(() => {
        if (initialValues) {
            setFormData({
                name: initialValues.name || "",
                price: initialValues.price?.toString().replace('.', ',') || "",
                quantity: initialValues.quantity?.toString().replace('.', ',') || "",
                unit: initialValues.unit || ""
            });
        } else {
            setFormData({
                name: "",
                price: "",
                quantity: "",
                unit: ""
            });
        }
    }, [initialValues]);

    function handleInputChange(field: keyof typeof formData, value: string) {
        setFormData(prev => ({ ...prev, [field]: value }));
    }

    async function handleSubmit() {
        await onSubmit({
            name: formData.name,
            price: formData.price as unknown as number,
            quantity: formData.quantity as unknown as number,
            unit: formData.unit
        } as Ingredient);
    }

    return (
        <form id="ingredient-form" className="modal-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="form-group form-name">
                <label htmlFor="ingredient-name">Nome*: </label>
                <input 
                    id="ingredient-name" 
                    name="ingredient-name" 
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />
            </div>
            <div className="form-group ingredient-form-price">
                <label htmlFor="ingredient-price">Preço*: </label>
                <input 
                    id="ingredient-price" 
                    name="ingredient-price" 
                    type="text"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="Ex: 10,50"
                />
            </div>
            <div className="form-group ingredient-form-quantity">
                <label htmlFor="ingredient-quantity">Quantidade*: </label>
                <input 
                    id="ingredient-quantity" 
                    name="ingredient-quantity" 
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    placeholder="Ex: 500"
                />
            </div>
            <div className="form-group ingredient-form-unit">
                <label htmlFor="ingredient-unit">Tipo de unidade*: </label>
                <select 
                    id="ingredient-unit" 
                    name="ingredient-unit"
                    value={formData.unit}
                    onChange={(e) => handleInputChange('unit', e.target.value)}
                >
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
                <button type="submit" className="button-primary">
                    {isEditing ? "Salvar Alterações" : "Adicionar Ingrediente"}
                </button>
            </div>
        </form>
    );
}
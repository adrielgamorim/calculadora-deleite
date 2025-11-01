import type { Ingredient } from "@models/Ingredient";
import { useState, useEffect } from "react";
import { FormGroup } from "@components/form/FormGroup";
import { Label } from "@components/form/Label";
import { FormActions } from "@components/form/FormActions";
import { Input } from "@components/atoms/Input";
import { Select } from "@components/atoms/Select";
import { Button } from "@components/atoms/Button";

type IngredientFormProps = {
    initialValues?: Ingredient | null;
    onSubmit: (data: Ingredient) => Promise<void>;
    onCancel: () => void;
    isEditing?: boolean;
    hideActions?: boolean;
};

export function IngredientForm({ initialValues, onSubmit, onCancel, isEditing = false, hideActions = false }: IngredientFormProps) {
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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await onSubmit({
            name: formData.name,
            price: formData.price as unknown as number,
            quantity: formData.quantity as unknown as number,
            unit: formData.unit
        } as Ingredient);
    }

    return (
        <form id="ingredient-form" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="ingredient-name" required>Nome</Label>
                <Input
                    id="ingredient-name"
                    name="ingredient-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    fullWidth
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="ingredient-price" required>Preço</Label>
                <Input
                    id="ingredient-price"
                    name="ingredient-price"
                    type="text"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="Ex: 10,50"
                    fullWidth
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="ingredient-quantity" required>Quantidade</Label>
                <Input
                    id="ingredient-quantity"
                    name="ingredient-quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    placeholder="Ex: 500"
                    fullWidth
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="ingredient-unit" required>Tipo de unidade</Label>
                <Select
                    id="ingredient-unit"
                    name="ingredient-unit"
                    value={formData.unit}
                    onChange={(e) => handleInputChange('unit', e.target.value)}
                    fullWidth
                >
                    <option value="" disabled>Selecione</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="l">l</option>
                    <option value="ml">ml</option>
                    <option value="un">un</option>
                </Select>
            </FormGroup>

            {!hideActions && (
                <FormActions>
                    <Button type="button" variant="secondary" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary">
                        {isEditing ? "Salvar Alterações" : "Adicionar Ingrediente"}
                    </Button>
                </FormActions>
            )}
        </form>
    );
}
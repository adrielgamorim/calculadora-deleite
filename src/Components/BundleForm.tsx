import type { Bundle } from "@models/Bundle";
import Select, { type MultiValue } from 'react-select';
import { useEffect, useState } from "react";
import { FormGroup } from "@components/form/FormGroup";
import { Label } from "@components/form/Label";
import { FormActions } from "@components/form/FormActions";
import { Input } from "@components/atoms/Input";
import { Button } from "@components/atoms/Button";

type BundleFormProps = {
    initialValues?: Bundle | null;
    onSubmit: (data: Bundle) => Promise<void>;
    onCancel: () => void;
    handleOptionsChange: (selectedOptions: MultiValue<{ value: string; label: string }>) => void;
    getIngredientOptionsForSelect: () => { label: string; value: string }[];
    selectedIngredientIds: string[];
    isEditing?: boolean;
    hideActions?: boolean;
};

export function BundleForm({ 
    initialValues, 
    onSubmit, 
    onCancel, 
    handleOptionsChange, 
    getIngredientOptionsForSelect, 
    selectedIngredientIds,
    isEditing = false,
    hideActions = false
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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await onSubmit({
            name: formData.name
        } as Bundle);
    }

    return (
        <form id="bundle-form" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="bundle-name" required>Nome</Label>
                <Input
                    id="bundle-name"
                    name="bundle-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    fullWidth
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="bundle-ingredients" required>Ingredientes</Label>
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
            </FormGroup>

            {!hideActions && (
                <FormActions>
                    <Button type="button" variant="secondary" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary">
                        {isEditing ? "Salvar Alterações" : "Adicionar Conjunto"}
                    </Button>
                </FormActions>
            )}
        </form>
    );
}

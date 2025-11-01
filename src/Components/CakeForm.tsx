import { Frames } from "@data/Frames";
import ReactSelect, { type MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import type { Cake } from "@models/Cake";
import { helpers } from "@helpers/helpers";
import { useEffect, useState } from "react";
import { FormGroup } from "@components/form/FormGroup";
import { Label } from "@components/form/Label";
import { FormActions } from "@components/form/FormActions";
import { Input } from "@components/atoms/Input";
import { Select } from "@components/atoms/Select";
import { Button } from "@components/atoms/Button";
import * as S from "./CakeForm.styled";

type CakeFormProps = {
  initialValues?: Cake | null;
  onSubmit: () => Promise<void>;
  onCancel: () => void;
  getIngredientOptionsForSelect: () => { label: string; value: string }[];
  getBundleOptionsForSelect: () => { label: string; value: string }[];
  ingredients: Ingredient[];
  bundles: Bundle[];
  selectedIngredientIds: string[];
  setSelectedIngredientIds: (ids: string[]) => void;
  selectedBundleIds: string[];
  setSelectedBundleIds: (ids: string[]) => void;
  ingredientQuantities: Map<string, number>;
  setIngredientQuantities: (quantities: Map<string, number>) => void;
  bundleIngredientQuantities: Map<string, Map<string, number>>;
  setBundleIngredientQuantities: (quantities: Map<string, Map<string, number>>) => void;
  isEditing?: boolean;
  hideActions?: boolean;
};

export function CakeForm({
  initialValues,
  onSubmit,
  onCancel,
  getIngredientOptionsForSelect,
  getBundleOptionsForSelect,
  ingredients,
  bundles,
  selectedIngredientIds,
  setSelectedIngredientIds,
  selectedBundleIds,
  setSelectedBundleIds,
  ingredientQuantities,
  setIngredientQuantities,
  bundleIngredientQuantities,
  setBundleIngredientQuantities,
  isEditing = false,
  hideActions = false
}: CakeFormProps) {
  const [cakeName, setCakeName] = useState("");
  const [cakeFrame, setCakeFrame] = useState("");

  useEffect(() => {
    if (initialValues) {
      setCakeName(initialValues.name || "");
      setCakeFrame(initialValues.frame.toString() || "");
    }
  }, [initialValues]);
  
  function handleIngredientSelection(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const ids = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedIngredientIds(ids);
    
    // Initialize quantities for new selections
    const newQuantities = new Map(ingredientQuantities);
    ids.forEach(id => {
      if (!newQuantities.has(id)) {
        newQuantities.set(id, 0);
      }
    });
    // Remove quantities for deselected items
    Array.from(newQuantities.keys()).forEach(id => {
      if (!ids.includes(id)) {
        newQuantities.delete(id);
      }
    });
    setIngredientQuantities(newQuantities);
  }

  function handleBundleSelection(selectedOptions: MultiValue<{ value: string; label: string }>): void {
    const ids = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedBundleIds(ids);
    
    // Initialize quantities for new bundle selections
    const newBundleQuantities = new Map(bundleIngredientQuantities);
    ids.forEach(bundleId => {
      if (!newBundleQuantities.has(bundleId)) {
        const bundle = bundles.find(b => b.id === bundleId);
        if (bundle?.hydratedIngredients) {
          const ingredientMap = new Map<string, number>();
          bundle.hydratedIngredients.forEach(ing => {
            ingredientMap.set(ing.id!, 0);
          });
          newBundleQuantities.set(bundleId, ingredientMap);
        }
      }
    });
    // Remove quantities for deselected bundles
    Array.from(newBundleQuantities.keys()).forEach(bundleId => {
      if (!ids.includes(bundleId)) {
        newBundleQuantities.delete(bundleId);
      }
    });
    setBundleIngredientQuantities(newBundleQuantities);
  }

  function updateIngredientQuantity(ingredientId: string, value: number): void {
    const newQuantities = new Map(ingredientQuantities);
    newQuantities.set(ingredientId, value);
    setIngredientQuantities(newQuantities);
  }

  function updateBundleIngredientQuantity(bundleId: string, ingredientId: string, value: number): void {
    const newBundleQuantities = new Map(bundleIngredientQuantities);
    const bundleMap = newBundleQuantities.get(bundleId) || new Map();
    bundleMap.set(ingredientId, value);
    newBundleQuantities.set(bundleId, bundleMap);
    setBundleIngredientQuantities(newBundleQuantities);
  }

  return (
    <form id="cake-form">
      <FormGroup>
        <Label htmlFor="cake-name" required>Nome</Label>
        <Input 
          id="cake-name" 
          name="cake-name" 
          type="text" 
          value={cakeName}
          onChange={(e) => setCakeName(e.target.value)}
          fullWidth 
        />
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="cake-frame" required>Tamanho</Label>
        <Select 
          id="cake-frame" 
          name="cake-frame" 
          value={cakeFrame}
          onChange={(e) => setCakeFrame(e.target.value)}
        >
          <option value="" disabled>Selecione</option>
          <option value={Frames.frame15}>15cm</option>
          <option value={Frames.frame25}>25cm</option>
          <option value={Frames.frame35}>35cm</option>
        </Select>
      </FormGroup>

      {/* Direct Ingredients Section */}
      <FormGroup>
        <Label htmlFor="cake-ingredients">Ingredientes Diretos</Label>
        <ReactSelect 
          options={getIngredientOptionsForSelect()} 
          value={getIngredientOptionsForSelect().filter(opt => selectedIngredientIds.includes(opt.value))}
          onChange={handleIngredientSelection} 
          isMulti 
          id="cake-ingredients" 
          placeholder="Selecione ingredientes"
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
      </FormGroup>

      {/* Ingredient Quantities */}
      {selectedIngredientIds.length > 0 && (
        <FormGroup>
          <Label>Quantidades (g, ml, ou un)</Label>
          <S.QuantitiesSection>
            {selectedIngredientIds.map(ingredientId => {
              const ingredient = ingredients.find(i => i.id === ingredientId);
              return (
                <S.QuantityRow key={ingredientId}>
                  <S.QuantityLabel>{ingredient?.name}:</S.QuantityLabel>
                  <S.QuantityInput
                    type="number" 
                    min="0"
                    step="0.01"
                    value={ingredientQuantities.get(ingredientId) || 0}
                    onChange={(e) => updateIngredientQuantity(ingredientId, parseFloat(e.target.value) || 0)}
                  />
                  <S.Unit>{helpers.convertUnitForDisplay(ingredient?.unit || '')}</S.Unit>
                </S.QuantityRow>
              );
            })}
          </S.QuantitiesSection>
        </FormGroup>
      )}

      {/* Bundles Section */}
      <FormGroup>
        <Label htmlFor="cake-bundles">Conjuntos</Label>
        <ReactSelect 
          options={getBundleOptionsForSelect()} 
          value={getBundleOptionsForSelect().filter(opt => selectedBundleIds.includes(opt.value))}
          onChange={handleBundleSelection} 
          isMulti 
          id="cake-bundles" 
          placeholder="Selecione conjuntos"
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
      </FormGroup>

      {/* Bundle Ingredient Quantities */}
      {selectedBundleIds.length > 0 && (
        <FormGroup>
          <Label>Quantidades dos Conjuntos</Label>
          <S.BundlesSection>
            {selectedBundleIds.map(bundleId => {
              const bundle = bundles.find(b => b.id === bundleId);
              if (!bundle?.hydratedIngredients) return null;
              
              return (
                <S.BundleCard key={bundleId}>
                  <S.BundleTitle>{bundle.name}:</S.BundleTitle>
                  <S.BundleIngredients>
                    {bundle.hydratedIngredients.map(ingredient => (
                      <S.QuantityRow key={ingredient.id}>
                        <S.QuantityLabel>{ingredient.name}:</S.QuantityLabel>
                        <S.QuantityInput 
                          type="number" 
                          min="0"
                          step="0.01"
                          value={bundleIngredientQuantities.get(bundleId)?.get(ingredient.id!) || 0}
                          onChange={(e) => updateBundleIngredientQuantity(bundleId, ingredient.id!, parseFloat(e.target.value) || 0)}
                        />
                        <S.Unit>{helpers.convertUnitForDisplay(ingredient.unit)}</S.Unit>
                      </S.QuantityRow>
                    ))}
                  </S.BundleIngredients>
                </S.BundleCard>
              );
            })}
          </S.BundlesSection>
        </FormGroup>
      )}

      {!hideActions && (
        <FormActions>
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="button" variant="primary" onClick={onSubmit}>
            {isEditing ? "Salvar Alterações" : "Adicionar Bolo"}
          </Button>
        </FormActions>
      )}
    </form>
  );
}

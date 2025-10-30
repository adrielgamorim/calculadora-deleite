import "@styles/AddItemForm.css";
import { Frames } from "@data/Frames";
import Select, { type MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import type { Cake } from "@models/Cake";
import { helpers } from "@helpers/helpers";
import { useEffect } from "react";

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
  isEditing = false
}: CakeFormProps) {

  useEffect(() => {
    if (initialValues) {
      const form = document.getElementById("cake-form") as HTMLFormElement;
      if (form) {
        (form.elements.namedItem("cake-name") as HTMLInputElement).value = initialValues.name || "";
        (form.elements.namedItem("cake-frame") as HTMLSelectElement).value = initialValues.frame.toString() || "";
      }
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
    <form id="cake-form" className="modal-form">
      <div className="form-group form-name">
        <label htmlFor="cake-name">Nome*: </label>
        <input id="cake-name" name="cake-name" type="text" />
      </div>
      
      <div className="form-group">
        <label htmlFor="cake-frame">Tamanho*: </label>
        <select id="cake-frame" name="cake-frame" defaultValue="">
          <option value="" disabled>Selecione</option>
          <option value={Frames.frame15}>15cm</option>
          <option value={Frames.frame25}>25cm</option>
          <option value={Frames.frame35}>35cm</option>
        </select>
      </div>

      {/* Direct Ingredients Section */}
      <div className="form-group">
        <label htmlFor="cake-ingredients">Ingredientes Diretos: </label>
        <Select 
          options={getIngredientOptionsForSelect()} 
          value={getIngredientOptionsForSelect().filter(opt => selectedIngredientIds.includes(opt.value))}
          onChange={handleIngredientSelection} 
          isMulti 
          id="cake-ingredients" 
          placeholder="Selecione ingredientes"
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
      </div>

      {/* Ingredient Quantities */}
      {selectedIngredientIds.length > 0 && (
        <div className="form-group">
          <label>Quantidades (g, ml, ou un):</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
            {selectedIngredientIds.map(ingredientId => {
              const ingredient = ingredients.find(i => i.id === ingredientId);
              return (
                <div key={ingredientId} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label style={{ flex: 1, fontSize: '0.875rem' }}>{ingredient?.name}:</label>
                  <input
                    type="number" 
                    min="0"
                    step="0.01"
                    value={ingredientQuantities.get(ingredientId)}
                    onChange={(e) => updateIngredientQuantity(ingredientId, parseFloat(e.target.value))}
                    style={{ width: '120px', padding: '0.375rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                  />
                  <span style={{ width: '50px', fontSize: '0.875rem' }}>{helpers.convertUnitForDisplay(ingredient?.unit || '')}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bundles Section */}
      <div className="form-group">
        <label htmlFor="cake-bundles">Conjuntos: </label>
        <Select 
          options={getBundleOptionsForSelect()} 
          value={getBundleOptionsForSelect().filter(opt => selectedBundleIds.includes(opt.value))}
          onChange={handleBundleSelection} 
          isMulti 
          id="cake-bundles" 
          placeholder="Selecione conjuntos"
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        />
      </div>

      {/* Bundle Ingredient Quantities */}
      {selectedBundleIds.length > 0 && (
        <div className="form-group">
          <label>Quantidades dos Conjuntos:</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
            {selectedBundleIds.map(bundleId => {
              const bundle = bundles.find(b => b.id === bundleId);
              if (!bundle?.hydratedIngredients) return null;
              
              return (
                <div key={bundleId} style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: '#f9fafb' }}>
                  <strong style={{ fontSize: '0.875rem', color: '#374151' }}>{bundle.name}:</strong>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                    {bundle.hydratedIngredients.map(ingredient => (
                      <div key={ingredient.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px' }}>
                        <label style={{ flex: 1, fontSize: '0.875rem' }}>{ingredient.name}:</label>
                        <input 
                          type="number" 
                          min="0"
                          step="0.01"
                          value={bundleIngredientQuantities.get(bundleId)?.get(ingredient.id!)}
                          onChange={(e) => updateBundleIngredientQuantity(bundleId, ingredient.id!, parseFloat(e.target.value))}
                          style={{ width: '120px', padding: '0.375rem', border: '1px solid #d1d5db', borderRadius: '4px' }}
                        />
                        <span style={{ width: '50px', fontSize: '0.875rem' }}>{helpers.convertUnitForDisplay(ingredient.unit)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="modal-form-buttons">
        <button type="button" className="button-secondary" onClick={onCancel}>
          Cancelar
        </button>
        <button type="button" className="button-primary" onClick={onSubmit}>
          {isEditing ? "Salvar Alterações" : "Adicionar Bolo"}
        </button>
      </div>
    </form>
  );
}

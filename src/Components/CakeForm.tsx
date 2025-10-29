import "@styles/AddItemForm.css";
import { Frames } from "@data/Frames";
import { SlClose } from "react-icons/sl";
import { Button } from "@components/Button";
import Select, { type MultiValue } from 'react-select';
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import { helpers } from "@helpers/helpers";

type CakeFormProps = {
  handleSubmit: () => Promise<void>;
  handleCloseMenu: () => void;
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
};

export function CakeForm({
  handleSubmit,
  handleCloseMenu,
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
}: CakeFormProps) {
  
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
    <form id="form">
      <div className="form-header">
        <h3 className="form-title">Adicionar Bolo</h3>
        <Button className="form-close-button" label={<SlClose size={24} />} onClick={handleCloseMenu} />
      </div>
      
      <div className="form-group form-name">
        <label htmlFor="cake-name">Nome*: </label>
        <input id="cake-name" type="text" />
      </div>
      
      <div className="form-group">
        <label htmlFor="cake-frame">Tamanho*: </label>
        <select id="cake-frame" defaultValue="">
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
        />
      </div>

      {/* Ingredient Quantities */}
      {selectedIngredientIds.length > 0 && (
        <div className="form-group">
          <label>Quantidades (g, ml, ou un):</label>
          {selectedIngredientIds.map(ingredientId => {
            const ingredient = ingredients.find(i => i.id === ingredientId);
            return (
              <div key={ingredientId} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label style={{ flex: 1 }}>{ingredient?.name}:</label>
                <input 
                  type="number" 
                  min="0"
                  value={ingredientQuantities.get(ingredientId)}
                  onChange={(e) => updateIngredientQuantity(ingredientId, parseFloat(e.target.value))}
                  style={{ width: '120px' }}
                />
                <span>{helpers.convertUnitForDisplay(ingredient?.unit || '')}</span>
              </div>
            );
          })}
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
        />
      </div>

      {/* Bundle Ingredient Quantities */}
      {selectedBundleIds.length > 0 && (
        <div className="form-group">
          <label>Quantidades dos Conjuntos:</label>
          {selectedBundleIds.map(bundleId => {
            const bundle = bundles.find(b => b.id === bundleId);
            if (!bundle?.hydratedIngredients) return null;
            
            return (
              <div key={bundleId} style={{ marginBottom: '16px', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <strong>{bundle.name}:</strong>
                {bundle.hydratedIngredients.map(ingredient => (
                  <div key={ingredient.id} style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
                    <label style={{ flex: 1 }}>{ingredient.name}:</label>
                    <input 
                      type="number" 
                      min="0"
                      value={bundleIngredientQuantities.get(bundleId)?.get(ingredient.id!)}
                      onChange={(e) => updateBundleIngredientQuantity(bundleId, ingredient.id!, parseFloat(e.target.value))}
                      style={{ width: '120px' }}
                    />
                    <span>{helpers.convertUnitForDisplay(ingredient.unit)}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      <Button label="Adicionar Bolo" onClick={handleSubmit} />
    </form>
  );
}

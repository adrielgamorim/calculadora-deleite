import { Endpoints } from "@data/Endpoints";
import type { Bundle } from "@models/Bundle";
import type { Cake } from "@models/Cake";
import type { Ingredient } from "@models/Ingredient";
import { Frames } from "@data/Frames";
import { getDocuments, getDocumentById } from "@requests/requests";

export const helpers = {
  parseDecimal(value: string): number {
    return parseFloat(value.replace(',', '.'));
  },

  ceilDecimal(value: number): number {
    return Math.ceil(value * 100) / 100
  },

  humanizePrice(price: number): string {
    price = this.ceilDecimal(price);
    const parts = price.toString().split('.');
    if (!parts[1]) return parts[0] + ',00';
    if (parts[1].length === 1) {
      parts[1] += '0';
    }
    return parts.join(',');
  },

  convertUnitForDisplay(unit: string): string {
    // Convert kg to g and l to ml for better readability in cakes
    if (unit === 'kg') {
      return 'g';
    }
    if (unit === 'l') {
      return 'ml';
    }
    // Keep other units as-is (g, ml, un)
    return unit;
  },

  calculateIngredientCost(ingredient: { price: number; quantity: number; unit: string }, usedQuantity: number): number {
    let quantity: number = ingredient.quantity;

    // Calculate price per unit
    if (ingredient.unit === "un") {
      const singleUnitPrice = ingredient.price / quantity;
      return singleUnitPrice * usedQuantity;
    }

    // Convert kg/l to g/ml for consistent calculation
    if (ingredient.unit === "kg" || ingredient.unit === "l") {
      quantity *= 1000;
    }

    const pricePerUnit = ingredient.price / quantity;
    return pricePerUnit * usedQuantity;
  },

  getFrameName(frame: Frames): string {
    switch (frame) {
      case Frames.frame15:
        return "15cm";
      case Frames.frame25:
        return "25cm";
      case Frames.frame35:
        return "35cm";
      default:
        return "Desconhecido";
    }
  },

  getIngredientOptionsForSelect(ingredients: Ingredient[]): { value: string; label: string }[] {
    return ingredients
      .map(ingredient => ({ value: ingredient.id!, label: ingredient.name }))
      .sort((a, b) => a.label.localeCompare(b.label));
  },

  async checkIngredientIsUsedInBundles(ingredientId: string): Promise<boolean> {
    const bundles = await getDocuments<Bundle>(Endpoints.bundles);
    return bundles?.some(bundle => bundle.ingredients.includes(ingredientId));
  },

  async checkIngredientIsUsedInCakes(ingredientId: string): Promise<boolean> {
    const cakes = await getDocuments<Cake>(Endpoints.cakes);
    return cakes?.some(cake => 
      cake.ingredients?.some(item => item.ingredientId === ingredientId) ||
      cake.bundles?.some(bundle => 
        bundle.ingredientQuantities?.some(item => item.ingredientId === ingredientId)
      )
    );
  },

  async checkBundleIsUsedInCakes(bundleId: string): Promise<boolean> {
    const cakes = await getDocuments<Cake>(Endpoints.cakes);
    return cakes?.some(cake => 
      cake.bundles?.some(item => {
        // Handle both new format (id) and old format (bundleId)
        const itemBundleId = item.id || (item as unknown as { bundleId: string }).bundleId;
        return itemBundleId === bundleId;
      })
    );
  },

  async pullCakesWithIngredients(cakes: Cake[]): Promise<Cake[]> {
    return await Promise.all(cakes.map(async cake => {
      // Hydrate direct ingredients - fetch full Ingredient objects (handle old data format)
      if (cake.ingredients && cake.ingredients.length > 0) {
        const hydratedIngredients = await Promise.all(
          cake.ingredients.map(async item => {
            // Extract ingredientId (handle both string and object formats)
            const ingredientId = typeof item.ingredientId === 'string' 
              ? item.ingredientId 
              : (item.ingredientId as unknown as { id: string })?.id;
            
            if (!ingredientId) return null;
            
            const ingredient = await getDocumentById<Ingredient>(Endpoints.ingredients, ingredientId);
            return ingredient ? { ...item, ingredientId, ingredient } : null;
          })
        );
        // Store hydrated data for display/calculations
        cake.hydratedIngredients = hydratedIngredients.filter((i): i is typeof i & { ingredient: Ingredient } => i !== null);
      }

      // Hydrate bundles - fetch full Bundle objects and their ingredients
      if (cake.bundles && cake.bundles.length > 0) {
        const hydratedBundles = await Promise.all(
          cake.bundles.map(async cakeBundle => {
            const bundle = await getDocumentById<Bundle>(Endpoints.bundles, cakeBundle.id);
            if (!bundle) return null;

            // Hydrate bundle's ingredients (handle both old string IDs and new format)
            const bundleIngredientIds = (bundle.ingredients || [])
              .map(item => typeof item === 'string' ? item : (item as unknown as { id: string })?.id)
              .filter((id): id is string => Boolean(id));
            
            const bundleIngredients = await Promise.all(
              bundleIngredientIds.map(ingredientId => 
                getDocumentById<Ingredient>(Endpoints.ingredients, ingredientId)
              )
            );

            // Hydrate cake's bundle ingredient quantities (handle old data format)
            const ingredientQuantities = cakeBundle.ingredientQuantities || [];
            const hydratedQuantities = await Promise.all(
              ingredientQuantities.map(async item => {
                // Extract ingredientId (handle both string and object formats)
                const ingredientId = typeof item.ingredientId === 'string' 
                  ? item.ingredientId 
                  : (item.ingredientId as unknown as { id: string })?.id;
                
                if (!ingredientId) return null;
                
                const ingredient = await getDocumentById<Ingredient>(Endpoints.ingredients, ingredientId);
                return ingredient ? { ...item, ingredientId, ingredient } : null;
              })
            );

            return {
              ...cakeBundle,
              bundle,
              bundleIngredients: bundleIngredients.filter((i): i is Ingredient => i !== null),
              hydratedQuantities: hydratedQuantities.filter((i): i is typeof i & { ingredient: Ingredient } => i !== null)
            };
          })
        );
        // Store hydrated data for display/calculations
        cake.hydratedBundles = hydratedBundles.filter((b): b is NonNullable<typeof b> => b !== null);
      }

      return cake;
    }));
  },

  async pullBundlesWithIngredients(bundles: Bundle[]): Promise<Bundle[]> {
    return await Promise.all(bundles.map(async bundle => {
      if (!bundle.ingredients || bundle.ingredients.length === 0) return bundle;
      
      // Handle both old data (Ingredient objects) and new data (string IDs)
      const ingredientIds = bundle.ingredients.map(item => 
        typeof item === 'string' ? item : (item as unknown as { id: string }).id
      ).filter(Boolean);
      
      // Fetch full Ingredient objects for each ingredient ID
      const hydratedIngredients = (await Promise.all(
        ingredientIds.map(ingredientId => 
          getDocumentById<Ingredient>(Endpoints.ingredients, ingredientId)
        )
      )).filter((ingredient): ingredient is Ingredient => ingredient !== null);
      
      // Store hydrated data for display purposes
      bundle.hydratedIngredients = hydratedIngredients;
      
      return bundle;
    }));
  },

  promptEditIngredient(ingredient: Ingredient): Ingredient {
    if (!ingredient) {
      alert("Ingrediente não encontrado.");
    }

    const newName = prompt("Nome", ingredient.name);
    if (newName === null || newName.trim() === "") {
      alert("Nome inválido.");
      return ingredient;
    }
    const newPriceStr = prompt("Preço", ingredient.price.toString());
    const newPrice = newPriceStr ? helpers.parseDecimal(newPriceStr) : NaN;
    if (isNaN(newPrice) || newPrice <= 0) {
      alert("Preço inválido.");
      return ingredient;
    }
    const newQuantityStr = prompt("Quantidade", ingredient.quantity.toString());
    const newQuantity = newQuantityStr ? helpers.parseDecimal(newQuantityStr) : NaN;
    if (isNaN(newQuantity) || newQuantity <= 0) {
      alert("Quantidade inválida.");
      return ingredient;
    }
    const newUnit = prompt("Unidade", ingredient.unit);
    if (newUnit === null || newUnit.trim() === "") {
      alert("Unidade inválida.");
      return ingredient;
    }

    return {
      ...ingredient,
      name: newName ?? ingredient.name,
      price: newPrice,
      quantity: newQuantity,
      unit: newUnit ?? ingredient.unit,
    };
  }
}
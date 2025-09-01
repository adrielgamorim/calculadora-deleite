import { Endpoints } from "@data/Endpoints";
import type { Bundle } from "@models/Bundle";
import type { Cake } from "@models/Cake";
import type { Ingredient } from "@models/Ingredient";
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

  async checkIngredientIsUsedInBundles(ingredientId: string): Promise<boolean> {
    const bundles = await getDocuments<Bundle>(Endpoints.bundles);
    return bundles.some(bundle => bundle.ingredients.some(ingredient => ingredient.id === ingredientId));
  },

  async checkIngredientIsUsedInCakes(ingredientId: string): Promise<boolean> {
    const cakes = await getDocuments<Cake>(Endpoints.cakes);
    return cakes.some(cake => cake.ingredients!.some(ingredient => ingredient.id === ingredientId));
  },

  async checkBundleIsUsedInCakes(bundleId: string): Promise<boolean> {
    const cakes = await getDocuments<Cake>(Endpoints.cakes);
    return cakes.some(cake => cake.bundles!.some(bundle => bundle.id === bundleId));
  },

  async pullCakesWithIngredients(cakes: Cake[]): Promise<Cake[]> {
    return await Promise.all(cakes.map(async cake => {
      cake.ingredients = !cake.ingredients ? undefined : (await Promise.all(
        cake.ingredients.map(
          ingredient => getDocumentById<Ingredient>(Endpoints.ingredients, ingredient.id!)
        )
      )).filter((ingredient): ingredient is Ingredient => ingredient !== null);

      cake.bundles = !cake.bundles ? undefined : (await Promise.all(
        cake.bundles.map(
          bundle => getDocumentById<Bundle>(Endpoints.bundles, bundle.id!)
        )
      )).filter((bundle): bundle is Bundle => bundle !== null);

      cake.bundles = await this.pullBundlesWithIngredients(cake.bundles || []);
      return cake;
    }));
  },

  async pullBundlesWithIngredients(bundles: Bundle[]): Promise<Bundle[]> {
    return await Promise.all(bundles.map(async bundle => {
      if (!bundle.ingredients) return bundle;
      bundle.ingredients = (await Promise.all(
        bundle.ingredients.map(
          ingredient => getDocumentById<Ingredient>(Endpoints.ingredients, ingredient.id!)
        )
      )).filter((ingredient): ingredient is Ingredient => ingredient !== null);
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
    const newUsedInFrame15Str = prompt("Qnt usada no aro 15", ingredient.used_in_frame_15.toString());
    const newUsedInFrame15 = newUsedInFrame15Str ? helpers.parseDecimal(newUsedInFrame15Str) : NaN;
    if (isNaN(newUsedInFrame15) || newUsedInFrame15 < 0) {
      alert("Quantidade inválida.");
      return ingredient;
    }
    const newUsedInFrame25Str = prompt("Qnt usada no aro 25", ingredient.used_in_frame_25.toString());
    const newUsedInFrame25 = newUsedInFrame25Str ? helpers.parseDecimal(newUsedInFrame25Str) : NaN;
    if (isNaN(newUsedInFrame25) || newUsedInFrame25 < 0) {
      alert("Quantidade inválida.");
      return ingredient;
    }
    const newUsedInFrame35Str = prompt("Qnt usada no aro 35", ingredient.used_in_frame_35.toString());
    const newUsedInFrame35 = newUsedInFrame35Str ? helpers.parseDecimal(newUsedInFrame35Str) : NaN;
    if (isNaN(newUsedInFrame35) || newUsedInFrame35 < 0) {
      alert("Quantidade inválida.");
      return ingredient;
    }

    return {
      ...ingredient,
      name: newName ?? ingredient.name,
      price: newPrice,
      quantity: newQuantity,
      unit: newUnit ?? ingredient.unit,
      used_in_frame_15: newUsedInFrame15,
      used_in_frame_25: newUsedInFrame25,
      used_in_frame_35: newUsedInFrame35,
    };
  }
}
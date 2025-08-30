import type { Ingredient } from "@models/Ingredient";

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
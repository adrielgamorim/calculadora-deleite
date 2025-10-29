import type { Base } from "@models/Base";
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import { Frames } from "@data/Frames";

export interface CakeIngredient {
    ingredientId: string;
    quantity: number;
}

export interface CakeBundleIngredient {
    ingredientId: string;
    quantity: number;
}

export interface CakeBundle {
    id: string;
    ingredientQuantities: CakeBundleIngredient[];
}

export interface Cake extends Base {
    ingredients?: CakeIngredient[];
    bundles?: CakeBundle[];
    frame: Frames;
    // Hydrated data (populated by helpers.pullCakesWithIngredients)
    hydratedIngredients?: Array<CakeIngredient & { ingredient: Ingredient }>;
    hydratedBundles?: Array<CakeBundle & { 
        bundle: Bundle;
        bundleIngredients: Ingredient[];
        hydratedQuantities: Array<CakeBundleIngredient & { ingredient: Ingredient }>;
    }>;
}

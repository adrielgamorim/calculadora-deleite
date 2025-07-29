import type { Base } from "@models/Base";
import type { Ingredient } from "@models/Ingredient";

export interface Bundle extends Base {
    ingredients: Ingredient[];
}

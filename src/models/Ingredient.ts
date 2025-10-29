import type { Base } from "@models/Base";

export interface Ingredient extends Base {
    price: number;
    quantity: number;
    unit: string;
}

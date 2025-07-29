import type { Base } from "@models/Base";

export interface Ingredient extends Base {
    price: number;
    quantity: number;
    unit: string;
    used_in_frame_15: number;
    used_in_frame_25: number;
    used_in_frame_35: number;
}

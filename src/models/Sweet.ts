import type { Base } from "@models/Base";
import type { Ingredient } from "@models/Ingredient";
import type { Bundle } from "@models/Bundle";
import { Frames } from "@data/Frames";

export interface Sweet extends Base {
    ingredients?: Ingredient[];
    bundles?: Bundle[];
    frame: Frames;
}

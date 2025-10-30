import type { Base } from "@models/Base";

export type RoundingStrategy = "none" | "to_90" | "to_50" | "to_integer";

export interface Config extends Base {
    conversionRate: number;
    frame15PackagingPrice: number;
    frame25PackagingPrice: number;
    frame35PackagingPrice: number;
    slicePackagingPrice: number;
    ifoodTax: number;
    roundingStrategy: RoundingStrategy;
}
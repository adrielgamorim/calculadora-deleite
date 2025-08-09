import type { Base } from "@models/Base";

export interface Config extends Base {
    conversionRate: number;
    frame15PackagingPrice: number;
    frame25PackagingPrice: number;
    frame35PackagingPrice: number;
    slicePackagingPrice: number;
    ifoodFee: number;
}
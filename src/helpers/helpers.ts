export const helpers = {
    parseDecimal(value: string): number {
      return parseFloat(value.replace(',', '.'));
    },

    ceilDecimal(value: number): number {
      return Math.ceil(value * 100) / 100
    }
}
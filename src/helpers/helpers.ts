export const helpers = {
    parseDecimal(value: string): number {
      return parseFloat(value.replace(',', '.'));
    }
}
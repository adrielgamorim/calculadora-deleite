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
    if (parts[1].length === 1) {
      parts[1] += '0';
    }
    return parts.join(',');
  }
}
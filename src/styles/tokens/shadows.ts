// Sombras para elevação - Light Mode
export const shadowsLight = {
  none: 'none',
  sm: '0 1px 2px rgba(34, 11, 3, 0.05)',
  md: '0 4px 6px rgba(34, 11, 3, 0.07)',
  lg: '0 10px 15px rgba(34, 11, 3, 0.1)',
  xl: '0 20px 25px rgba(34, 11, 3, 0.15)',
  '2xl': '0 25px 50px rgba(34, 11, 3, 0.2)',
  inner: 'inset 0 2px 4px rgba(34, 11, 3, 0.06)',
} as const;

// Sombras para elevação - Dark Mode
export const shadowsDark = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px rgba(0, 0, 0, 0.4)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.6)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.7)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.25)',
} as const;

export type Shadow = keyof typeof shadowsLight;

// Breakpoints para responsividade
export const breakpoints = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

// Valores numéricos para cálculos
export const breakpointValues = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

// Media queries helpers
export const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
  
  // Max-width queries
  maxMobile: `@media (max-width: ${breakpointValues.tablet - 1}px)`,
  maxTablet: `@media (max-width: ${breakpointValues.desktop - 1}px)`,
  maxDesktop: `@media (max-width: ${breakpointValues.wide - 1}px)`,
} as const;

export type Breakpoint = keyof typeof breakpoints;

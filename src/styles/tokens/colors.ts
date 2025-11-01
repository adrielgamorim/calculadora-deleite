// Cores extraídas da logo.png
export const logoColors = {
  darkChocolate: '#220b03',
  caramel: '#844830',
  milkChocolate: '#502516',
  cream: '#e1cdb5',
  offWhite: '#fafcfb',
} as const;

// Paleta Primary (tons de marrom/caramelo)
export const primary = {
  50: '#F0E8DC',
  100: '#e1cdb5',
  300: '#C08560',
  400: '#A36548',
  500: '#844830', // Cor principal
  600: '#6B3420',
  700: '#502516',
  900: '#220b03',
} as const;

// Paleta Secondary (laranja queimado)
export const secondary = {
  100: '#F5D9C8',
  400: '#E08A5B',
  500: '#D4713D', // Cor principal
  600: '#B85E2F',
} as const;

// Paleta de Cinzas - Light Mode
export const grayLight = {
  50: '#fafcfb',
  100: '#F5F3F0',
  200: '#e1cdb5',
  300: '#D1BFA8',
  400: '#B5A593',
  500: '#998A7A',
  600: '#6B5D51',
  700: '#502516',
  800: '#3A1A0E',
  900: '#220b03',
} as const;

// Paleta de Cinzas - Dark Mode
export const grayDark = {
  50: '#1A0F0A',
  100: '#2A1B12',
  200: '#3D2618',
  300: '#502516',
  400: '#6B3420',
  500: '#844830',
  600: '#A36548',
  700: '#C08560',
  800: '#D5A581',
  900: '#e1cdb5',
} as const;

// Helper function para criar rgba a partir das cores da paleta
const createRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Cores Semânticas - Light Mode
export const semanticLight = {
  success: '#7A9D54',
  successLight: '#A8C786',
  successDark: '#5E7D40',
  successFocus: createRgba('#7A9D54', 0.12),
  
  warning: '#D4A017',
  warningLight: '#E5B73B',
  warningDark: '#A67D0F',
  
  error: '#C44536',
  errorLight: '#D4634F',
  errorDark: '#9A3428',
  errorFocus: createRgba('#C44536', 0.12),
  
  info: '#5B8FA3',
  infoLight: '#7AA8BB',
  infoDark: '#46717F',
} as const;

// Cores Semânticas - Dark Mode
export const semanticDark = {
  success: '#92B868',
  successLight: '#A8C786',
  successDark: '#7A9D54',
  successFocus: createRgba('#92B868', 0.12),
  
  warning: '#E5B73B',
  warningLight: '#F0CA66',
  warningDark: '#D4A017',
  
  error: '#D4634F',
  errorLight: '#E0826F',
  errorDark: '#C44536',
  errorFocus: createRgba('#D4634F', 0.12),
  
  info: '#72A3B5',
  infoLight: '#8BB5C5',
  infoDark: '#5B8FA3',
} as const;

// Light Theme Colors
export const lightColors = {
  // Backgrounds
  background: primary[50], // Tom creme mais escuro
  surface: grayLight[50], // Branco levemente cremoso
  surfaceVariant: logoColors.cream,
  surfaceHover: grayLight[200],
  
  // Primary
  primary: primary[500],
  primaryHover: primary[400],
  primaryPressed: primary[600],
  primaryLight: primary[100],
  onPrimary: grayLight[50], // Branco cremoso
  
  // Secondary
  secondary: secondary[500],
  secondaryHover: secondary[400],
  secondaryPressed: secondary[600],
  secondaryLight: secondary[100],
  onSecondary: grayLight[50], // Branco cremoso
  
  // Text
  textPrimary: logoColors.darkChocolate,
  textSecondary: logoColors.milkChocolate,
  textTertiary: grayLight[600],
  textDisabled: grayLight[400],
  textOnPrimary: grayLight[50], // Branco cremoso
  
  // Borders
  border: logoColors.cream,
  borderLight: grayLight[300],
  borderHover: grayLight[400],
  divider: grayLight[300],
  
  // States
  hover: createRgba(primary[500], 0.08),
  pressed: createRgba(primary[500], 0.12),
  focus: createRgba(primary[500], 0.12),
  disabled: createRgba(primary[500], 0.38),
  hoverOverlay: createRgba(grayLight[50], 0.1),
  activeOverlay: createRgba(grayLight[50], 0.15),
  
  // Semantic
  ...semanticLight,
} as const;

// Dark Theme Colors
export const darkColors = {
  // Backgrounds
  background: grayDark[50],
  surface: grayDark[100],
  surfaceVariant: grayDark[200],
  surfaceHover: grayDark[300],
  
  // Primary
  primary: primary[400],
  primaryHover: primary[300],
  primaryPressed: primary[500],
  primaryLight: primary[700],
  onPrimary: logoColors.darkChocolate,
  
  // Secondary
  secondary: secondary[400],
  secondaryHover: secondary[100],
  secondaryPressed: secondary[500],
  secondaryLight: secondary[600],
  onSecondary: logoColors.darkChocolate,
  
  // Text
  textPrimary: logoColors.cream,
  textSecondary: grayDark[700],
  textTertiary: grayDark[600],
  textDisabled: grayDark[400],
  textOnPrimary: logoColors.darkChocolate,
  
  // Borders
  border: logoColors.milkChocolate,
  borderLight: grayDark[300],
  borderHover: grayDark[400],
  divider: grayDark[200],
  
  // States
  hover: createRgba(primary[300], 0.08),
  pressed: createRgba(primary[300], 0.12),
  focus: createRgba(primary[300], 0.12),
  disabled: createRgba(primary[300], 0.38),
  hoverOverlay: createRgba(grayLight[50], 0.08),
  activeOverlay: createRgba(grayLight[50], 0.12),
  
  // Semantic
  ...semanticDark,
} as const;

// Generic Colors type structure
export interface Colors {
  // Backgrounds
  background: string;
  surface: string;
  surfaceVariant: string;
  surfaceHover: string;
  
  // Primary
  primary: string;
  primaryHover: string;
  primaryPressed: string;
  primaryLight: string;
  onPrimary: string;
  
  // Secondary
  secondary: string;
  secondaryHover: string;
  secondaryPressed: string;
  secondaryLight: string;
  onSecondary: string;
  
  // Text
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textDisabled: string;
  textOnPrimary: string;
  
  // Borders
  border: string;
  borderLight: string;
  borderHover: string;
  divider: string;
  
  // States
  hover: string;
  pressed: string;
  focus: string;
  disabled: string;
  hoverOverlay: string;
  activeOverlay: string;
  
  // Semantic
  success: string;
  successLight: string;
  successDark: string;
  successFocus: string;
  warning: string;
  warningLight: string;
  warningDark: string;
  error: string;
  errorLight: string;
  errorDark: string;
  errorFocus: string;
  info: string;
  infoLight: string;
  infoDark: string;
}

export type ThemeColors = typeof lightColors | typeof darkColors;

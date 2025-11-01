import { lightColors, darkColors, type Colors } from './tokens/colors';
import { spacing } from './tokens/spacing';
import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from './tokens/typography';
import { breakpoints, mediaQueries } from './tokens/breakpoints';
import { shadowsLight, shadowsDark } from './tokens/shadows';
import { duration, easing, transitions, keyframes } from './tokens/animations';

// Theme interface (generic para aceitar light/dark)
export interface Theme {
  colors: Colors;
  spacing: typeof spacing;
  typography: {
    fontFamily: typeof fontFamily;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    lineHeight: typeof lineHeight;
    letterSpacing: typeof letterSpacing;
  };
  breakpoints: typeof breakpoints;
  mediaQueries: typeof mediaQueries;
  shadows: typeof shadowsLight | typeof shadowsDark;
  animations: {
    duration: typeof duration;
    easing: typeof easing;
    transitions: typeof transitions;
    keyframes: typeof keyframes;
  };
  isDark: boolean;
}

// Light Theme
export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography: {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  },
  breakpoints,
  mediaQueries,
  shadows: shadowsLight,
  animations: {
    duration,
    easing,
    transitions,
    keyframes,
  },
  isDark: false,
};

// Dark Theme
export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography: {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  },
  breakpoints,
  mediaQueries,
  shadows: shadowsDark,
  animations: {
    duration,
    easing,
    transitions,
    keyframes,
  },
  isDark: true,
};

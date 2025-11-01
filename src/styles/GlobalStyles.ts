import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily.sans};
    font-size: ${props => props.theme.typography.fontSize.base};
    font-weight: ${props => props.theme.typography.fontWeight.normal};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.background};
    transition: ${props => props.theme.animations.transitions.colors};
    
    /* Prevent horizontal scroll */
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    line-height: ${props => props.theme.typography.lineHeight.tight};
    color: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.animations.transitions.colors};
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    
    ${props => props.theme.mediaQueries.maxMobile} {
      font-size: ${props => props.theme.typography.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
    
    ${props => props.theme.mediaQueries.maxMobile} {
      font-size: ${props => props.theme.typography.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
  }

  h4 {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: ${props => props.theme.animations.transitions.fast};

    &:hover {
      color: ${props => props.theme.colors.primaryHover};
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 6px;

    &:hover {
      background: ${props => props.theme.colors.borderHover};
    }
  }

  /* Focus visible for accessibility */
  *:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  /* Remove default focus outline (replaced by focus-visible) */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Remove number input spinners */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  /* Root layout */
  #root {
    height: 100vh;
    width: 100vw;
    text-align: center;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* List reset */
  ul {
    list-style-type: none;
    padding: 0;
  }

  /* Active utility class */
  .active {
    background-color: ${props => props.theme.colors.primary};
    outline: 4px auto -webkit-focus-ring-color;
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

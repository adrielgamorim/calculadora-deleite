import styled, { css } from 'styled-components';
import { spin } from '@styles/keyframes';

export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerVariant = 'primary' | 'secondary' | 'light';

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
}

const sizeStyles = {
  small: css`
    width: 16px;
    height: 16px;
    border-width: ${props => props.theme.spacing.xxs};
  `,
  medium: css`
    width: 24px;
    height: 24px;
    border-width: 3px;
  `,
  large: css`
    width: 40px;
    height: 40px;
    border-width: 4px;
  `,
};

const variantStyles = {
  primary: css`
    border-color: ${props => props.theme.colors.primary};
    border-right-color: transparent;
  `,
  secondary: css`
    border-color: ${props => props.theme.colors.secondary};
    border-right-color: transparent;
  `,
  light: css`
    border-color: ${props => props.theme.colors.surface};
    border-right-color: transparent;
  `,
};

export const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  
  /* Size */
  ${props => sizeStyles[props.size || 'medium']}
  
  /* Variant */
  ${props => variantStyles[props.variant || 'primary']}
`;

Spinner.defaultProps = {
  size: 'medium',
  variant: 'primary',
};

// Container centrado para Spinner em loading states
export const SpinnerContainer = styled.div<{ minHeight?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.minHeight || '200px'};
  width: 100%;
`;

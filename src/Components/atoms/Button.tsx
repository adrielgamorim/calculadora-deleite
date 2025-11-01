import styled, { css } from 'styled-components';
import { spin } from '@styles/keyframes';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const sizeStyles = {
  small: css`
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.typography.fontSize.sm};
    min-height: 32px;
  `,
  medium: css`
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.typography.fontSize.base};
    min-height: 40px;
  `,
  large: css`
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.typography.fontSize.lg};
    min-height: 48px;
  `,
};

const variantStyles = {
  primary: css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.onPrimary};
    border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.primaryHover};
      border-color: ${props => props.theme.colors.primaryHover};
    }

    &:active:not(:disabled) {
      background: ${props => props.theme.colors.primaryPressed};
      border-color: ${props => props.theme.colors.primaryPressed};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${props => props.theme.colors.textPrimary};
    border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.border};

    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.hover};
      border-color: ${props => props.theme.colors.borderHover};
    }

    &:active:not(:disabled) {
      background: ${props => props.theme.colors.pressed};
    }
  `,
  danger: css`
    background: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.onPrimary};
    border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.error};

    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.errorLight};
      border-color: ${props => props.theme.colors.errorLight};
    }

    &:active:not(:disabled) {
      background: ${props => props.theme.colors.errorDark};
      border-color: ${props => props.theme.colors.errorDark};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${props => props.theme.colors.textPrimary};
    border: ${props => props.theme.spacing.xxs} solid transparent;

    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.hover};
    }

    &:active:not(:disabled) {
      background: ${props => props.theme.colors.pressed};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  /* Reset */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border-radius: ${props => props.theme.spacing.xs};
  cursor: pointer;
  user-select: none;
  transition: ${props => props.theme.animations.transitions.default};
  white-space: nowrap;

  /* Size */
  ${props => sizeStyles[props.size || 'medium']}

  /* Variant */
  ${props => variantStyles[props.variant || 'primary']}

  /* Full Width */
  ${props => props.fullWidth && css`
    width: 100%;
  `}

  /* Disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading */
  ${props => props.isLoading && css`
    position: relative;
    color: transparent;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: ${props => props.theme.spacing.xxs} solid currentColor;
      border-radius: 50%;
      border-right-color: transparent;
      animation: ${spin} 0.6s linear infinite;
    }
  `}

  /* Focus */
  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  /* Mobile touch target */
  ${props => props.theme.mediaQueries.maxMobile} {
    min-height: 44px;
  }
`;

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  type: 'button',
};

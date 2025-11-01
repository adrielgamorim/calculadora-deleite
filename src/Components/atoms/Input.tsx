import styled, { css } from 'styled-components';

export type InputVariant = 'default' | 'error' | 'success';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  inputSize?: InputSize;
  fullWidth?: boolean;
  error?: boolean;
  success?: boolean;
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

export const Input = styled.input<InputProps>`
  /* Reset */
  display: block;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-weight: ${props => props.theme.typography.fontWeight.normal};
  border-radius: ${props => props.theme.spacing.xs};
  transition: ${props => props.theme.animations.transitions.default};
  
  /* Size */
  ${props => sizeStyles[props.inputSize || 'medium']}
  
  /* Default variant */
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.textPrimary};
  border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.border};

  &::placeholder {
    color: ${props => props.theme.colors.textTertiary};
  }

  &:hover:not(:disabled) {
    border-color: ${props => props.theme.colors.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.focus};
  }

  /* Error state */
  ${props => props.error && css`
    border-color: ${props => props.theme.colors.error};

    &:focus {
      border-color: ${props => props.theme.colors.error};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.errorFocus};
    }
  `}

  /* Success state */
  ${props => props.success && css`
    border-color: ${props => props.theme.colors.success};

    &:focus {
      border-color: ${props => props.theme.colors.success};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.successFocus};
    }
  `}

  /* Disabled */
  &:disabled {
    background: ${props => props.theme.colors.surfaceVariant};
    color: ${props => props.theme.colors.textDisabled};
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Remove number spinners */
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  /* Mobile touch target */
  ${props => props.theme.mediaQueries.maxMobile} {
    min-height: 44px;
  }
`;

Input.defaultProps = {
  variant: 'default',
  inputSize: 'medium',
  type: 'text',
};

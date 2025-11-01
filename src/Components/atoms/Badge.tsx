import styled, { css } from 'styled-components';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type BadgeSize = 'small' | 'medium';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

const sizeStyles = {
  small: css`
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.typography.fontSize.xs};
  `,
  medium: css`
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
    font-size: ${props => props.theme.typography.fontSize.sm};
  `,
};

const variantStyles = {
  primary: css`
    background: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primary};
  `,
  secondary: css`
    background: ${props => props.theme.colors.secondaryLight};
    color: ${props => props.theme.colors.secondary};
  `,
  success: css`
    background: ${props => props.theme.colors.successLight};
    color: ${props => props.theme.colors.successDark};
  `,
  warning: css`
    background: ${props => props.theme.colors.warningLight};
    color: ${props => props.theme.colors.warningDark};
  `,
  error: css`
    background: ${props => props.theme.colors.errorLight};
    color: ${props => props.theme.colors.errorDark};
  `,
  info: css`
    background: ${props => props.theme.colors.infoLight};
    color: ${props => props.theme.colors.infoDark};
  `,
  neutral: css`
    background: ${props => props.theme.colors.surfaceVariant};
    color: ${props => props.theme.colors.textPrimary};
  `,
};

export const Badge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  border-radius: ${props => props.theme.spacing.xs};
  white-space: nowrap;
  transition: ${props => props.theme.animations.transitions.default};
  
  /* Size */
  ${props => sizeStyles[props.size || 'medium']}
  
  /* Variant */
  ${props => variantStyles[props.variant || 'neutral']}
`;

Badge.defaultProps = {
  size: 'medium',
  variant: 'neutral',
};

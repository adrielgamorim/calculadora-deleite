import styled, { css } from 'styled-components';

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const Message = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.base};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  justify-content: flex-end;
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.divider};

  /* Mobile: stack vertically */
  ${props => props.theme.mediaQueries.maxMobile} {
    flex-direction: column-reverse;
  }
`;

export type ConfirmVariant = 'danger' | 'warning' | 'info';

interface ConfirmButtonProps {
  $variant: ConfirmVariant;
}

const variantStyles = {
  info: css`
    background-color: ${props => props.theme.colors.info};

    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.infoDark};
    }
  `,
  warning: css`
    background-color: ${props => props.theme.colors.warning};

    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.warningDark};
    }
  `,
  danger: css`
    background-color: ${props => props.theme.colors.error};

    &:hover:not(:disabled) {
      background-color: ${props => props.theme.colors.errorDark};
    }
  `,
};

export const CancelButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  cursor: pointer;
  transition: ${props => props.theme.animations.transitions.default};
  border: none;
  background-color: ${props => props.theme.colors.surfaceVariant};
  color: ${props => props.theme.colors.textPrimary};

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.colors.hover};
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  /* Mobile: full width */
  ${props => props.theme.mediaQueries.maxMobile} {
    width: 100%;
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const ConfirmButton = styled.button<ConfirmButtonProps>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  cursor: pointer;
  transition: ${props => props.theme.animations.transitions.default};
  border: none;
  color: ${props => props.theme.colors.surface};

  ${props => variantStyles[props.$variant]}

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  /* Mobile: full width */
  ${props => props.theme.mediaQueries.maxMobile} {
    width: 100%;
    padding: ${props => props.theme.spacing.sm};
  }
`;

import styled, { css } from 'styled-components';
import { slideInRight, slideInUp } from '@styles/keyframes';

export const Container = styled.div`
  position: fixed;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  max-width: 400px;

  /* Mobile: bottom position */
  ${props => props.theme.mediaQueries.maxMobile} {
    top: auto;
    bottom: ${props => props.theme.spacing.md};
    left: ${props => props.theme.spacing.md};
    right: ${props => props.theme.spacing.md};
    max-width: none;
  }
`;

export type ToastVariant = 'success' | 'error' | 'info';

interface ToastWrapperProps {
  $variant: ToastVariant;
}

const variantStyles = {
  success: css`
    border-left: 4px solid ${props => props.theme.colors.success};

    & > span:first-child {
      background-color: ${props => props.theme.colors.success};
    }
  `,
  error: css`
    border-left: 4px solid ${props => props.theme.colors.error};

    & > span:first-child {
      background-color: ${props => props.theme.colors.error};
    }
  `,
  info: css`
    border-left: 4px solid ${props => props.theme.colors.info};

    & > span:first-child {
      background-color: ${props => props.theme.colors.info};
    }
  `,
};

export const ToastWrapper = styled.div<ToastWrapperProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.lg};
  background: ${props => props.theme.colors.surface};
  animation: ${slideInRight} 0.3s ease-out;
  min-width: 300px;

  ${props => variantStyles[props.$variant]}

  /* Mobile: slide from bottom */
  ${props => props.theme.mediaQueries.maxMobile} {
    min-width: auto;
    animation: ${slideInUp} 0.3s ease-out;
  }
`;

export const Icon = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.surface};
`;

export const Message = styled.span`
  flex: 1;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textPrimary};
`;

export const CloseButton = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${props => props.theme.colors.textTertiary};
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.animations.transitions.colors};

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }
`;

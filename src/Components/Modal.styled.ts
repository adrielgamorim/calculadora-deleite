import styled from 'styled-components';
import { fadeIn, slideUp, slideUpMobile } from '@styles/keyframes';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} ${props => props.theme.animations.duration.normal} ${props => props.theme.animations.easing.easeOut};
  backdrop-filter: blur(4px);
`;

export type ModalSize = 'xxs' | 'xs' | 'small' | 'medium' | 'large';

interface ContentProps {
  $size: ModalSize;
  $minHeight?: string;
}

const sizeStyles = {
  xxs: `
    width: 90%;
    max-width: 280px;
    min-height: 200px;
  `,
  xs: `
    width: 90%;
    max-width: 320px;
    min-height: 200px;
  `,
  small: `
    width: 90%;
    max-width: 400px;
    min-height: 200px;
  `,
  medium: `
    width: 90%;
    max-width: 600px;
    min-height: 300px;
  `,
  large: `
    width: 90%;
    max-width: 900px;
    min-height: 600px;
  `,
};

export const Content = styled.div<ContentProps>`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.xl};
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} ${props => props.theme.animations.duration.normal} ${props => props.theme.animations.easing.easeOut};
  
  ${props => sizeStyles[props.$size]}
  ${props => props.$minHeight && `min-height: ${props.$minHeight};`}

  /* Mobile: full-screen */
  ${props => props.theme.mediaQueries.maxMobile} {
    width: 100%;
    max-width: none;
    max-height: 100vh;
    border-radius: 0;
    animation: ${slideUpMobile} 0.3s ease-out;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.divider};

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.spacing.xs};
  transition: ${props => props.theme.animations.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.textPrimary};
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }
`;

export const Body = styled.div`
  padding: ${props => props.theme.spacing.md};
  overflow-y: auto;
  flex: 1;
  min-height: 0; /* Important for flex scrolling */

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const Footer = styled.div`
  padding: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.divider};
  background: ${props => props.theme.colors.surface};
  border-bottom-left-radius: ${props => props.theme.spacing.sm};
  border-bottom-right-radius: ${props => props.theme.spacing.sm};

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.sm};
  }
`;

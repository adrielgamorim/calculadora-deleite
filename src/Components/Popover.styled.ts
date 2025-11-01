import styled from 'styled-components';
import { fadeIn } from '@styles/keyframes';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  animation: ${fadeIn} 0.15s ease-out;
`;

interface ContentProps {
  $top: number;
  $left: number;
}

export const Content = styled.div<ContentProps>`
  position: fixed;
  top: ${props => props.$top}px;
  left: ${props => props.$left}px;
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.spacing.sm};
  box-shadow: ${props => props.theme.shadows.xl};
  z-index: 1001;
  min-width: 200px;
  animation: ${fadeIn} ${props => props.theme.animations.duration.fast} ${props => props.theme.animations.easing.easeOut};
  transform-origin: top left;
  transition: transform ${props => props.theme.animations.duration.fast} ${props => props.theme.animations.easing.easeOut},
              opacity ${props => props.theme.animations.duration.fast} ${props => props.theme.animations.easing.easeOut};

  &:hover {
    transform: translateY(-2px);
  }

  /* Mobile: center on screen */
  ${props => props.theme.mediaQueries.maxMobile} {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 280px;
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

export const Title = styled.h3`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
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

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.sm};
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 500px;

  ${props => props.theme.mediaQueries.maxTablet} {
    max-width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.textTertiary};
  pointer-events: none;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  padding-left: 48px;
  padding-right: 32px;
  font-size: ${props => props.theme.typography.fontSize.base};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.textPrimary};
  outline: none;
  transition: ${props => props.theme.animations.transitions.default};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.focus};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textTertiary};
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: ${props => props.theme.spacing.xs};
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.xs};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textTertiary};
  font-size: ${props => props.theme.typography.fontSize.xl};
  border-radius: 50%;
  transition: ${props => props.theme.animations.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.textPrimary};
  }

  &:active {
    background-color: ${props => props.theme.colors.pressed};
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }
`;

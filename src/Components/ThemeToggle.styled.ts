import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: ${props => props.theme.colors.surfaceVariant};
  border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.border};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textPrimary};
  border-radius: 50%;
  transition: ${props => props.theme.animations.transitions.default};
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${props => props.theme.colors.hover};
    border-color: ${props => props.theme.colors.primary};
  }

  &:active {
    background-color: ${props => props.theme.colors.surfaceVariant};
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  svg {
    width: 32px;
    height: 32px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`;

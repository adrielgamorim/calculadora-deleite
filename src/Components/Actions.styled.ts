import styled from 'styled-components';

export const ActionsCell = styled.td`
  text-align: center;
  vertical-align: middle;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  padding: ${props => props.theme.spacing.xs};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textSecondary};
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

import styled from "styled-components";

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.surface};
  border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing.xs};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
  transition: ${props => props.theme.animations.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.surfaceHover};
    border-color: ${props => props.theme.colors.borderHover};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.focus};
  }
`;

export const GoogleIcon = styled.svg`
  margin-right: ${props => props.theme.spacing.sm};
  flex-shrink: 0;
`;

export const ButtonText = styled.span`
  display: inline;
`;

export const HiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

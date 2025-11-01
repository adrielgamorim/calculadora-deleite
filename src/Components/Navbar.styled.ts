import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  box-sizing: border-box;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  position: absolute;
  right: ${props => props.theme.spacing.xl};

  ${props => props.theme.mediaQueries.maxMobile} {
    position: static;
    margin-top: ${props => props.theme.spacing.sm};
  }
`;

export const IconButton = styled.button`
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
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: -0.2rem;
  background-color: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.lg};
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
  flex-direction: column;

  ${DropdownContainer}:hover & {
    display: flex;
  }

  a {
    text-decoration: none;
    display: block;
  }

  a + a {
    margin-top: 4px;
  }
`;

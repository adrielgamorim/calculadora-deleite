import styled from 'styled-components';

export const Details = styled.details`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  vertical-align: top;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

export const Summary = styled.summary`
  cursor: pointer;
  font-weight: 500;
  user-select: none;
  padding: 0.25rem 0.5rem;
  list-style-position: outside;
  display: inline-block;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.hoverOverlay};
  }

  ${Details}[open] & {
    background-color: ${props => props.theme.colors.activeOverlay};
  }
`;

export const IngredientsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 200px;
  margin: 0.25rem 0 0 0;
  padding: 0.75rem 1rem 0.75rem 2rem;
  font-size: 0.9em;
  color: ${props => props.theme.colors.textPrimary};
  list-style: disc;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  box-shadow: ${props => props.theme.shadows.lg};
`;

export const IngredientItem = styled.li`
  margin: 0.4rem 0;
  padding-left: 0.25rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const EmptyMessage = styled(IngredientItem)`
  font-style: italic;
  color: ${props => props.theme.colors.textTertiary};
`;

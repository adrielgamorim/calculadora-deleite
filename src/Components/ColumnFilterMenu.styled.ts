import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
`;

export const FilterToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: ${props => props.theme.typography.fontSize.base};
  transition: all ${props => props.theme.animations.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.surfaceVariant};
    border-color: ${props => props.theme.colors.borderHover};
  }
`;

export const FilterDropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.lg};
  min-width: 250px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;

  @media ${props => props.theme.mediaQueries.maxMobile} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 350px;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  font-weight: 600;

  span {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.textSecondary};
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color ${props => props.theme.animations.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.surfaceVariant};
  }
`;

export const FilterOptions = styled.div`
  padding: 0.5rem;
`;

export const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color ${props => props.theme.animations.transitions.default};
  user-select: none;

  &:hover {
    background: ${props => props.theme.colors.surfaceVariant};
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;

export const CheckboxCustom = styled.span<{ $checked?: boolean }>`
  width: 20px;
  height: 20px;
  border: ${props => props.theme.spacing.xxs} solid ${props => props.$checked ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all ${props => props.theme.animations.transitions.default};
  background: ${props => props.$checked ? props.theme.colors.primary : props.theme.colors.background};
  color: ${props => props.$checked ? props.theme.colors.textOnPrimary : 'transparent'};
`;

export const ColumnLabel = styled.span`
  flex: 1;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textPrimary};
`;

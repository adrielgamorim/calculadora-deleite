import styled, { css } from 'styled-components';

interface StyledTableHeaderProps {
  $isSortable: boolean;
  $width?: string;
}

export const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.textPrimary};
  background-color: ${props => props.theme.colors.surfaceVariant};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: background-color ${props => props.theme.animations.transitions.default};
  user-select: none;
  white-space: nowrap;
  ${props => props.$width && `width: ${props.$width};`}

  /* Sortable styles */
  ${props => props.$isSortable && css`
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.colors.hover};
    }

    &:active {
      background-color: ${props => props.theme.colors.pressed};
    }
  `}

  /* Screen reader only text */
  &[aria-sort]::after {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    content: "(${props => props['aria-sort'] === 'ascending' ? 'ordem crescente' : 'ordem decrescente'})";
  }
`;

interface SortIconProps {
  $active: boolean;
}

export const SortIcon = styled.span<SortIconProps>`
  display: inline-flex;
  align-items: center;
  margin-left: ${props => props.theme.spacing.xs};
  opacity: ${props => props.$active ? 1 : 0.3};
  color: ${props => props.$active ? props.theme.colors.primary : 'inherit'};
  transition: opacity ${props => props.theme.animations.transitions.fast},
              color ${props => props.theme.animations.transitions.fast};

  svg {
    width: 16px;
    height: 16px;
  }
`;
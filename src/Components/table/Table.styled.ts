import styled, { css } from 'styled-components';

interface TableContainerProps {
  $minHeight?: string;
  $loading?: boolean;
}

export const TableContainer = styled.div<TableContainerProps>`
  min-height: ${props => props.$minHeight};
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: opacity ${props => props.theme.animations.transitions.default};
  ${props => props.$loading && css`
    opacity: 0.7;
    pointer-events: none;
  `}

  & > table {
    width: auto;
    border-collapse: collapse;
    table-layout: auto;

    th {
      padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
      color: ${props => props.theme.colors.textPrimary};
      font-size: ${props => props.theme.typography.fontSize.sm};
      font-weight: ${props => props.theme.typography.fontWeight.medium};
      white-space: nowrap;
      word-wrap: break-word;
      height: auto;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme.colors.hover};
      }
    }
  }

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.sm};
  }
`;

export const TableRow = styled.tr`
  user-select: none;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.surface};
  transition: background-color ${props => props.theme.animations.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.hover};
  }

  &:last-child {
    border-bottom: none;
  }

  /* Zebra striping */
  &:nth-child(even) {
    background: ${props => props.theme.colors.surfaceVariant};

    &:hover {
      background: ${props => props.theme.colors.hover};
    }
  }
`;

export const TableCell = styled.td`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  }
`;

export const ExpandableDetails = styled.details`
  display: inline-block;
  margin-right: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.xxs};
  vertical-align: top;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
`;

export const ExpandableSummary = styled.summary`
  cursor: pointer;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  user-select: none;
  padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.xs};
  list-style-position: outside;
  display: inline-block;
  border-radius: ${props => props.theme.spacing.xxs};
  transition: background-color ${props => props.theme.animations.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.hover};
  }

  ${ExpandableDetails}[open] & {
    background-color: ${props => props.theme.colors.pressed};
  }
`;

export const IngredientsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 200px;
  margin: ${props => props.theme.spacing.xs} 0 0 0;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md} 
          ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textPrimary};
  list-style: disc;
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing.xs};
  box-shadow: ${props => props.theme.shadows.lg};
`;

export const IngredientItem = styled.li`
  margin: ${props => props.theme.spacing.xs} 0;
  padding-left: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.textPrimary};
`;
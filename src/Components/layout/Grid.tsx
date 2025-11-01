import styled from 'styled-components';

export interface GridProps {
  columns?: number | string;
  gap?: keyof typeof import('@styles/tokens/spacing').spacing;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  autoFit?: boolean;
  minColumnWidth?: string;
  className?: string;
  children: React.ReactNode;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${props => props.theme.spacing[props.gap || 'md']};
  align-items: ${props => props.alignItems || 'stretch'};
  justify-items: ${props => props.justifyItems || 'stretch'};
  
  ${props => {
    if (props.autoFit && props.minColumnWidth) {
      return `grid-template-columns: repeat(auto-fit, minmax(${props.minColumnWidth}, 1fr));`;
    }
    if (typeof props.columns === 'number') {
      return `grid-template-columns: repeat(${props.columns}, 1fr);`;
    }
    if (typeof props.columns === 'string') {
      return `grid-template-columns: ${props.columns};`;
    }
    return 'grid-template-columns: 1fr;';
  }}

  /* Mobile */
  ${props => props.theme.mediaQueries.maxMobile} {
    grid-template-columns: 1fr;
  }
`;

Grid.defaultProps = {
  columns: 1,
  gap: 'md',
};

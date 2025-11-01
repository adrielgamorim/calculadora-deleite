import styled from 'styled-components';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: keyof typeof import('@styles/tokens/spacing').spacing;
  className?: string;
}

export const Divider = styled.hr<DividerProps>`
  border: none;
  background: ${props => props.theme.colors.divider};
  
  ${props => props.orientation === 'vertical' ? `
    width: 1px;
    height: auto;
    align-self: stretch;
    margin: 0 ${props.theme.spacing[props.spacing || 'md']};
  ` : `
    height: 1px;
    width: 100%;
    margin: ${props.theme.spacing[props.spacing || 'md']} 0;
  `}
`;

Divider.defaultProps = {
  orientation: 'horizontal',
  spacing: 'md',
};

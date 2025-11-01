import styled from 'styled-components';

export type StackDirection = 'vertical' | 'horizontal';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps {
  direction?: StackDirection;
  gap?: keyof typeof import('@styles/tokens/spacing').spacing;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const alignMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const justifyMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${props => props.direction === 'horizontal' ? 'row' : 'column'};
  gap: ${props => props.theme.spacing[props.gap || 'md']};
  align-items: ${props => alignMap[props.align || 'stretch']};
  justify-content: ${props => justifyMap[props.justify || 'start']};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;

Stack.defaultProps = {
  direction: 'vertical',
  gap: 'md',
  align: 'stretch',
  justify: 'start',
  wrap: false,
};

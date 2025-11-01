import styled from 'styled-components';

export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

const maxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => maxWidths[props.maxWidth || 'xl']};
  margin-left: ${props => props.center ? 'auto' : '0'};
  margin-right: ${props => props.center ? 'auto' : '0'};
  padding-left: ${props => props.padding !== false ? props.theme.spacing.md : '0'};
  padding-right: ${props => props.padding !== false ? props.theme.spacing.md : '0'};

  ${props => props.theme.mediaQueries.tablet} {
    padding-left: ${props => props.padding !== false ? props.theme.spacing.lg : '0'};
    padding-right: ${props => props.padding !== false ? props.theme.spacing.lg : '0'};
  }

  ${props => props.theme.mediaQueries.desktop} {
    padding-left: ${props => props.padding !== false ? props.theme.spacing.xl : '0'};
    padding-right: ${props => props.padding !== false ? props.theme.spacing.xl : '0'};
  }
`;

Container.defaultProps = {
  maxWidth: 'xl',
  padding: true,
  center: true,
};

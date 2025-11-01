import styled, { css } from 'styled-components';

export interface CardProps {
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  padding?: keyof typeof import('@styles/tokens/spacing').spacing;
  hover?: boolean;
  clickable?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card = styled.div<CardProps>`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing[props.padding || 'md']};
  border: 1px solid ${props => props.theme.colors.border};
  transition: ${props => props.theme.animations.transitions.default};
  
  /* Elevation */
  ${props => {
    const elevation = props.elevation || 'sm';
    if (elevation !== 'none') {
      return `box-shadow: ${props.theme.shadows[elevation]};`;
    }
    return '';
  }}

  /* Hover effect */
  ${props => (props.hover || props.clickable) && css`
    &:hover {
      box-shadow: ${props => props.theme.shadows.md};
      border-color: ${props => props.theme.colors.borderHover};
      transform: translateY(-2px);
    }
  `}

  /* Clickable */
  ${props => props.clickable && css`
    cursor: pointer;
    user-select: none;

    &:active {
      transform: translateY(0);
      box-shadow: ${props => props.theme.shadows.sm};
    }
  `}
`;

Card.defaultProps = {
  elevation: 'sm',
  padding: 'md',
  hover: false,
  clickable: false,
};

// Card sections for better structure
export const CardHeader = styled.div`
  padding-bottom: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const CardBody = styled.div`
  /* Main content area */
`;

export const CardFooter = styled.div`
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.divider};
  margin-top: ${props => props.theme.spacing.md};
`;

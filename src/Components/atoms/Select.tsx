import styled from 'styled-components';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  fullWidth?: boolean;
  error?: boolean;
}

export const Select = styled.select<SelectProps>`
  /* Reset */
  display: block;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-weight: ${props => props.theme.typography.fontWeight.normal};
  font-size: ${props => props.theme.typography.fontSize.base};
  border-radius: ${props => props.theme.spacing.xs};
  transition: ${props => props.theme.animations.transitions.default};
  cursor: pointer;
  
  /* Styling */
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  padding-right: ${props => props.theme.spacing.xl};
  min-height: 40px;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.textPrimary};
  border: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.border};
  
  /* Custom arrow */
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23844830' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${props => props.theme.spacing.sm} center;

  &:hover:not(:disabled) {
    border-color: ${props => props.theme.colors.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.focus};
  }

  /* Error state */
  ${props => props.error && `
    border-color: ${props.theme.colors.error};

    &:focus {
      border-color: ${props.theme.colors.error};
      box-shadow: 0 0 0 3px ${props.theme.colors.errorFocus};
    }
  `}

  /* Disabled */
  &:disabled {
    background: ${props => props.theme.colors.surfaceVariant};
    color: ${props => props.theme.colors.textDisabled};
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Mobile touch target */
  ${props => props.theme.mediaQueries.maxMobile} {
    min-height: 44px;
  }

  /* Options styling */
  option {
    background: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.textPrimary};
    padding: ${props => props.theme.spacing.sm};
  }
`;

Select.defaultProps = {
  fullWidth: false,
};

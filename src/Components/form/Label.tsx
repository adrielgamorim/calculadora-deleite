import styled from 'styled-components';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = styled.label<LabelProps>`
  display: block;
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.xs};

  ${props => props.required && `
    &::after {
      content: ' *';
      color: ${props.theme.colors.error};
    }
  `}
`;

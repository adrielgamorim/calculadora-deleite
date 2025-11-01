import styled from 'styled-components';

export interface ErrorMessageProps {
  className?: string;
  children: React.ReactNode;
}

export const ErrorMessage = styled.small<ErrorMessageProps>`
  display: block;
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.error};
  margin-top: ${props => props.theme.spacing.xs};
`;

export interface HelperTextProps {
  className?: string;
  children: React.ReactNode;
}

export const HelperText = styled.small<HelperTextProps>`
  display: block;
  font-family: ${props => props.theme.typography.fontFamily.sans};
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.textTertiary};
  margin-top: ${props => props.theme.spacing.xs};
`;

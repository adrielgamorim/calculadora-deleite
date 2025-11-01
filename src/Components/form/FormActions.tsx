import styled from 'styled-components';

export interface FormActionsProps {
  align?: 'left' | 'center' | 'right' | 'between';
  noDivider?: boolean;
  className?: string;
  children: React.ReactNode;
}

const alignMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  between: 'space-between',
};

export const FormActions = styled.div<FormActionsProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => alignMap[props.align || 'right']};
  gap: ${props => props.theme.spacing.sm};
  
  ${props => !props.noDivider && `
    margin-top: ${props.theme.spacing.md};
    padding-top: ${props.theme.spacing.md};
    border-top: 1px solid ${props.theme.colors.divider};
  `}

  /* Mobile: stack buttons vertically */
  ${props => props.theme.mediaQueries.maxMobile} {
    flex-direction: column-reverse;
    
    & > button {
      width: 100%;
    }
  }
`;

FormActions.defaultProps = {
  align: 'right',
  noDivider: false,
};

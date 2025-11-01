import styled from 'styled-components';

export interface FormGroupProps {
  horizontal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  flex-wrap: ${props => props.horizontal ? 'wrap' : 'nowrap'};
  gap: ${props => props.horizontal ? props.theme.spacing.md : props.theme.spacing.xs};
  align-items: ${props => props.horizontal ? 'center' : 'flex-start'};
  margin-bottom: ${props => props.theme.spacing.md};

  /* Horizontal: label fixo, input flex */
  ${props => props.horizontal && `
    & > label {
      flex: 0 0 200px;
      font-weight: ${props.theme.typography.fontWeight.medium};
    }

    & > input,
    & > select,
    & > textarea {
      flex: 1;
    }

    & > small {
      flex-basis: 100%;
      margin-left: calc(200px + ${props.theme.spacing.md});
      margin-top: -${props.theme.spacing.xs};
    }
  `}

  /* Mobile: sempre vertical */
  ${props => props.theme.mediaQueries.maxMobile} {
    flex-direction: column;
    align-items: flex-start;

    & > label {
      flex: none;
    }

    & > input,
    & > select,
    & > textarea {
      width: 100%;
    }

    & > small {
      margin-left: 0;
    }
  }
`;

FormGroup.defaultProps = {
  horizontal: false,
};

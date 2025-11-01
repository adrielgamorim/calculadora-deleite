import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.lg} 0;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const PageActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: ${props => props.theme.spacing['xl']};
  width: 100%;
  min-width: 0;

  & > *:first-child {
    grid-column: 3;
    min-width: 0;
  }

  & > *:nth-child(2) {
    grid-column: 4;
  }

  ${props => props.theme.mediaQueries.maxMobile} {
    grid-template-columns: 1fr;
    
    & > *:first-child,
    & > *:nth-child(2) {
      grid-column: 1;
      width: 100%;
    }
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  align-items: center;

  ${props => props.theme.mediaQueries.maxMobile} {
    width: 100%;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing['2xl']};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.base};
`;

import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.lg};
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  ${props => props.theme.mediaQueries.maxMobile} {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  gap: ${props => props.theme.spacing.lg};
`;

export const UnauthorizedTitle = styled.h1`
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.typography.fontSize["2xl"]};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  gap: ${props => props.theme.spacing.lg};
`;

export const LoginTitle = styled.h1`
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.typography.fontSize["2xl"]};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0;
`;

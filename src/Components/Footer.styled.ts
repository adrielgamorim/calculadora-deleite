import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-size: ${props => props.theme.typography.fontSize.xs};
  text-align: center;
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.textTertiary};
  margin-top: auto;
`;

export const FooterText = styled.p`
  margin: ${props => props.theme.spacing.xs} 0;
`;

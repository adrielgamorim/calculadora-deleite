import styled from 'styled-components';

export const PaginationContainer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.divider};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;

  ${props => props.theme.mediaQueries.maxMobile} {
    flex-direction: column;
    gap: ${props => props.theme.spacing.sm};
  }
`;

export const PaginationInfo = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};

  ${props => props.theme.mediaQueries.maxMobile} {
    font-size: ${props => props.theme.typography.fontSize.xs};
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.$active ? props.theme.colors.primary : props.theme.colors.border};
  background: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${props => props.$active ? props.theme.colors.background : props.theme.colors.textPrimary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.$active ? props.theme.typography.fontWeight.semibold : props.theme.typography.fontWeight.normal};
  border-radius: ${props => props.theme.spacing.xs};
  cursor: pointer;
  transition: ${props => props.theme.animations.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.hover};
    border-color: ${props => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  ${props => props.theme.mediaQueries.maxMobile} {
    min-width: 32px;
    height: 32px;
    padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.xs};
    font-size: ${props => props.theme.typography.fontSize.xs};
  }
`;

export const PageEllipsis = styled.span`
  padding: 0 ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.textSecondary};
  user-select: none;
`;

export const PageSizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};

  ${props => props.theme.mediaQueries.maxMobile} {
    font-size: ${props => props.theme.typography.fontSize.xs};
  }
`;

export const PageSizeSelect = styled.select`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  border-radius: ${props => props.theme.spacing.xs};
  cursor: pointer;
  transition: ${props => props.theme.animations.transitions.default};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  &:focus-visible {
    outline: ${props => props.theme.spacing.xxs} solid ${props => props.theme.colors.primary};
    outline-offset: ${props => props.theme.spacing.xxs};
  }

  ${props => props.theme.mediaQueries.maxMobile} {
    font-size: ${props => props.theme.typography.fontSize.xs};
    padding: ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.xs};
  }
`;

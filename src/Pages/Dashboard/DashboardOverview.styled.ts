import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  color: ${props => props.theme.colors.textPrimary};

  h1 {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.textPrimary};
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize.lg};
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textPrimary};
  }
`;

// Metrics Section - 4 Cards Grid
export const MetricsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

export const MetricCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.divider};
  border-radius: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: box-shadow ${props => props.theme.animations.transitions.default};

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

export const MetricIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const MetricLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const MetricValue = styled.div`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textPrimary};
`;

// Content Section - 2 Column Layout
export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['2xl']};

  @media ${props => props.theme.mediaQueries.maxMobile} {
    grid-template-columns: 1fr;
  }
`;

export const StatsBox = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.divider};
  border-radius: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.sm};
`;

export const StatsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing['2xl']};
`;

// Top Cakes List
export const TopCakesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const CakeItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.surfaceVariant};
  border-radius: ${props => props.theme.spacing.xs};
  border: 1px solid ${props => props.theme.colors.divider};
  transition: background-color ${props => props.theme.animations.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.hover};
  }
`;

export const Medal = styled.span`
  font-size: 2rem;
`;

export const CakeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
  flex: 1;
`;

export const CakeName = styled.span`
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
`;

export const CakeDetails = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
`;

// Ingredient List
export const IngredientList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const IngredientItem = styled.li`
  padding: ${props => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  color: ${props => props.theme.colors.textPrimary};

  &:last-child {
    border-bottom: none;
  }
`;

// Price Range
export const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${props => props.theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`;

export const PriceLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
`;

export const PriceValue = styled.span`
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textPrimary};
`;

// Frame Distribution
export const FrameDistribution = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const FrameItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${props => props.theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }
`;

export const FrameLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

export const FrameValue = styled.span`
  color: ${props => props.theme.colors.textPrimary};
`;

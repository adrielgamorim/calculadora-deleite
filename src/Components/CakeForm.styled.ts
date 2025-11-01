import styled from 'styled-components';
import { Input } from '@components/atoms/Input';

export const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

export const QuantityLabel = styled.label`
  flex: 1;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textPrimary};
`;

export const QuantityInput = styled(Input)`
  width: 120px;
`;

export const Unit = styled.span`
  width: 50px;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
`;

export const BundleCard = styled.div`
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.spacing.xs};
  background-color: ${props => props.theme.colors.surfaceVariant};
`;

export const BundleTitle = styled.strong`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textPrimary};
`;

export const BundleIngredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.sm};
  margin-left: ${props => props.theme.spacing.md};
`;

export const QuantitiesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.sm};
`;

export const BundlesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.sm};
`;

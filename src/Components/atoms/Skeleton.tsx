import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
  circle?: boolean;
}

export const Skeleton = styled.div<SkeletonProps>`
  background: ${props => props.theme.colors.surfaceVariant};
  background-image: linear-gradient(
    90deg,
    ${props => props.theme.colors.surfaceVariant} 0px,
    ${props => props.theme.colors.surface} 40px,
    ${props => props.theme.colors.surfaceVariant} 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: ${props => props.circle ? '50%' : props.theme.spacing.xs};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '16px'};
  opacity: 0.7;
`;
import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${scaleUp} ${props => props.theme.animations.duration.slow} ${props => props.theme.animations.easing.easeOut};
`;

export const LoadingCircleOuter = styled.circle`
  stroke: ${props => props.theme.colors.textPrimary};
  stroke-width: 6;
  fill: none;
  opacity: 0.3;
  transform-origin: center;
  animation: ${spin} 3s linear infinite;
`;

export const LoadingCircleInner = styled.circle`
  fill: ${props => props.theme.colors.primary};
  transform-origin: center;
  animation: ${spin} 1s linear infinite;
`;

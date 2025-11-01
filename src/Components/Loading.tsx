import * as S from './Loading.styled';

export function Loading() {
  return (
    <S.LoadingContainer>
      <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <S.LoadingCircleOuter cx="50" cy="50" r="45" />
        <S.LoadingCircleInner cx="50" cy="5" r="7">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1s"
            repeatCount="indefinite"
          />
        </S.LoadingCircleInner>
      </svg>
    </S.LoadingContainer>
  );
}
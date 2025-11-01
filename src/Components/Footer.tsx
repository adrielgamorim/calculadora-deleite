import packageJson from '@package';
import * as S from './Footer.styled';

export function Footer() {
  return (
    <S.StyledFooter>
      <S.FooterText>&copy; 2025 Calculadora D'Leite. Todos os direitos reservados.</S.FooterText>
      <S.FooterText>Versão {packageJson.version}</S.FooterText>
    </S.StyledFooter>
  );
}

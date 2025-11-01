import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from '@contexts/ThemeContext';
import * as S from './ThemeToggle.styled';

export function ThemeToggle() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <S.ToggleButton
      onClick={toggleTheme}
      aria-label={`Alternar para modo ${themeMode === 'light' ? 'escuro' : 'claro'}`}
      title={`Modo ${themeMode === 'light' ? 'escuro' : 'claro'}`}
    >
      {themeMode === 'light' ? <RiMoonLine /> : <RiSunLine />}
    </S.ToggleButton>
  );
}

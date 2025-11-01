import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import * as S from "./SearchBar.styled";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) {
  return (
    <S.Container>
      <S.Icon>
        <IoSearchOutline />
      </S.Icon>
      <S.Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar"
        title={placeholder}
      />
      {value && (
        <S.ClearButton
          type="button"
          onClick={() => onChange("")}
          aria-label="Limpar busca"
        >
          <IoCloseOutline />
        </S.ClearButton>
      )}
    </S.Container>
  );
}

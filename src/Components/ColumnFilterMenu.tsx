import { useState, useRef, useEffect } from "react";
import { IoFilterOutline, IoCheckmark } from "react-icons/io5";
import * as S from "./ColumnFilterMenu.styled";

interface Column {
  key: string;
  label: string;
}

interface ColumnFilterMenuProps {
  columns: Column[];
  visibleColumns: Set<string>;
  onToggle: (columnKey: string) => void;
}

export function ColumnFilterMenu({ columns, visibleColumns, onToggle }: ColumnFilterMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <S.Container ref={menuRef}>
      <S.FilterToggleButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Filtrar colunas"
      >
        <IoFilterOutline size={20} />
        Filtrar Colunas
      </S.FilterToggleButton>

      {isOpen && (
        <S.FilterDropdown>
          <S.FilterHeader>
            <span>Mostrar colunas</span>
            <S.CloseButton
              onClick={() => setIsOpen(false)}
              aria-label="Fechar"
            >
              ×
            </S.CloseButton>
          </S.FilterHeader>
          <S.FilterOptions>
            {columns.map(col => (
              <S.FilterOption key={col.key}>
                <input
                  type="checkbox"
                  checked={visibleColumns.has(col.key)}
                  onChange={() => onToggle(col.key)}
                />
                <S.CheckboxCustom $checked={visibleColumns.has(col.key)}>
                  {visibleColumns.has(col.key) && <IoCheckmark />}
                </S.CheckboxCustom>
                <S.ColumnLabel>{col.label}</S.ColumnLabel>
              </S.FilterOption>
            ))}
          </S.FilterOptions>
        </S.FilterDropdown>
      )}
    </S.Container>
  );
}

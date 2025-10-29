import { useState, useRef, useEffect } from "react";
import { IoFilterOutline, IoCheckmark } from "react-icons/io5";
import "@styles/ColumnFilterMenu.css";

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
    <div className="column-filter-menu" ref={menuRef}>
      <button
        className="filter-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Filtrar colunas"
      >
        <IoFilterOutline size={20} />
        Filtrar Colunas
      </button>

      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-header">
            <span>Mostrar colunas</span>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar"
            >
              ×
            </button>
          </div>
          <div className="filter-options">
            {columns.map(col => (
              <label key={col.key} className="filter-option">
                <input
                  type="checkbox"
                  checked={visibleColumns.has(col.key)}
                  onChange={() => onToggle(col.key)}
                />
                <span className="checkbox-custom">
                  {visibleColumns.has(col.key) && <IoCheckmark />}
                </span>
                <span className="column-label">{col.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

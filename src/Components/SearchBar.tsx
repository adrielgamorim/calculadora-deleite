import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import "@styles/SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) {
  return (
    <div className="search-bar">
      <IoSearchOutline className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="search-clear"
          aria-label="Limpar busca"
        >
          <IoCloseOutline />
        </button>
      )}
    </div>
  );
}

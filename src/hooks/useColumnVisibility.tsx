import { useState } from "react";

/**
 * Custom hook to manage column visibility in tables.
 * 
 * @param defaultVisibleColumns - Array with the keys of columns visible by default
 * @returns Object with visible columns state and functions to manipulate them
 * 
 * @example
 * const { visibleColumns, toggleColumn, isColumnVisible } = useColumnVisibility(
 *   ['name', 'base', 'converted']
 * );
 */
export function useColumnVisibility<T extends string>(
  defaultVisibleColumns: T[]
) {
  const [visibleColumns, setVisibleColumns] = useState<Set<T>>(
    new Set(defaultVisibleColumns)
  );

  const toggleColumn = (column: T) => {
    setVisibleColumns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(column)) {
        newSet.delete(column);
      } else {
        newSet.add(column);
      }
      return newSet;
    });
  };

  const isColumnVisible = (column: T): boolean => {
    return visibleColumns.has(column);
  };

  const showAllColumns = (allColumns: T[]) => {
    setVisibleColumns(new Set(allColumns));
  };

  const hideAllColumns = () => {
    setVisibleColumns(new Set());
  };

  return {
    visibleColumns,
    toggleColumn,
    isColumnVisible,
    showAllColumns,
    hideAllColumns,
  };
}

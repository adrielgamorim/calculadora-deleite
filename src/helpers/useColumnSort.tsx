import { useState, useEffect } from "react";

type SortDirection = "asc" | "desc";

export function useColumnSort<T>(initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  useEffect(() => {
    const parseCurrency = (value: string | number) => {
      if (typeof value === "string") {
        const numStr = value.replace(",", ".");
        const parsed = parseFloat(numStr);
        return isNaN(parsed) ? value : parsed;
      }
      return value;
    };

    if (sortColumn) {
      const sorted = [...initialData].sort((a, b) => {
        const aValue = parseCurrency(a[sortColumn] as string | number);
        const bValue = parseCurrency(b[sortColumn] as string | number);
        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
      setData(sorted);
    } else {
      setData(initialData);
    }
  }, [initialData, sortColumn, sortDirection]);

  function handleSort(column: keyof T) {
    let direction: SortDirection = "asc";
    if (sortColumn === column) {
      direction = sortDirection === "asc" ? "desc" : "asc";
    }
    setSortColumn(column);
    setSortDirection(direction);
  }

  function setNewData(newData: T[]) {
    setData(newData);
  }

  return { data, sortColumn, sortDirection, handleSort, setNewData };
}

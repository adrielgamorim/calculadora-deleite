import { useState, useMemo } from "react";

/**
 * Custom hook to filter data based on a search term.
 * 
 * @param data - Array of data to be filtered
 * @param searchFields - Array with the names of fields that should be searched
 * @returns Object containing the search term, function to change the term and filtered data
 * 
 * @example
 * const { searchTerm, setSearchTerm, filteredData } = useSearch(
 *   ingredients,
 *   ['name', 'unit']
 * );
 */
export function useSearch<T>(
  data: T[],
  searchFields: (keyof T)[]
) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = item[field];
        
        if (value === null || value === undefined) {
          return false;
        }

        return String(value).toLowerCase().includes(lowerSearchTerm);
      })
    );
  }, [data, searchTerm, searchFields]);

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
  };
}

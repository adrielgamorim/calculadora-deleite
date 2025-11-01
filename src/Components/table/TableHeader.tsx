import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { StyledTableHeader, SortIcon } from './TableHeader.styled';

export interface Column<T = unknown> {
  key?: keyof T;
  label: string;
  sortable?: boolean;
}

interface TableHeaderProps<T> {
  column: Column<T>;
  sortColumn: keyof T | null;
  sortDirection: 'ascending' | 'descending';
  onSort: (column: keyof T) => void;
  width?: string;
}

export function TableHeader<T>({ 
  column, 
  sortColumn, 
  sortDirection, 
  onSort,
  width
}: TableHeaderProps<T>) {
  const isCurrentSort = sortColumn === column.key;
  const isSortable = column.sortable !== false;

  function handleClick() {
    if (!isSortable) return;
    onSort(column.key!);
  }

  return (
    <StyledTableHeader 
      onClick={handleClick}
      $isSortable={isSortable}
      $width={width}
      role={isSortable ? 'columnheader button' : 'columnheader'}
      aria-sort={isCurrentSort ? sortDirection : undefined}
    >
      <span>{column.label}</span>
      {isSortable && isCurrentSort && (
        <SortIcon $active={isCurrentSort}>
          {isCurrentSort && sortDirection === 'ascending' ? (
            <IoArrowUp size={16} />
          ) : (
            <IoArrowDown size={16} />
          )}
        </SortIcon>
      )}
    </StyledTableHeader>
  );
}
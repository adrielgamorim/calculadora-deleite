import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import * as S from "./Pagination.styled";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  pageSizeOptions?: number[];
}

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/**
 * Pagination component with page controls and page size selector.
 * 
 * @example
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={totalPages}
 *   totalItems={totalItems}
 *   pageSize={pageSize}
 *   onPageChange={goToPage}
 *   onPageSizeChange={setPageSize}
 *   canGoPrevious={canGoPrevious}
 *   canGoNext={canGoNext}
 * />
 */
export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  canGoPrevious,
  canGoNext,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
}: PaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're near the start
      if (currentPage <= 3) {
        endPage = 4;
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('ellipsis');
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('ellipsis');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <S.PaginationContainer>
      <S.PaginationInfo>
        Mostrando {startItem} a {endItem} de {totalItems} {totalItems === 1 ? 'item' : 'itens'}
      </S.PaginationInfo>

      <S.PaginationControls>
        <S.PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          aria-label="Página anterior"
        >
          <IoChevronBack size={18} />
        </S.PageButton>

        {getPageNumbers().map((page, index) =>
          page === 'ellipsis' ? (
            <S.PageEllipsis key={`ellipsis-${index}`}>...</S.PageEllipsis>
          ) : (
            <S.PageButton
              key={page}
              $active={page === currentPage}
              onClick={() => onPageChange(page)}
              aria-label={`Página ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </S.PageButton>
          )
        )}

        <S.PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          aria-label="Próxima página"
        >
          <IoChevronForward size={18} />
        </S.PageButton>
      </S.PaginationControls>

      <S.PageSizeContainer>
        <label htmlFor="page-size-select">Itens por página:</label>
        <S.PageSizeSelect
          id="page-size-select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </S.PageSizeSelect>
      </S.PageSizeContainer>
    </S.PaginationContainer>
  );
}

import type { ReactNode } from "react";
import * as Table from "./index";
import { Loading } from "@components/Loading";
import { Pagination } from "@components/Pagination";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (item: T) => ReactNode;
}

export interface PaginationConfig {
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

export interface EntityTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  emptyMessage?: string;
  sortColumn?: keyof T | null;
  sortDirection?: 'ascending' | 'descending';
  onSort?: (column: keyof T) => void;
  renderActions?: (item: T) => ReactNode;
  getRowKey?: (item: T) => string;
  pagination?: PaginationConfig;
}

/**
 * Generic table component for displaying entity data with sorting and actions.
 * 
 * @example
 * <EntityTable
 *   data={ingredients}
 *   columns={[
 *     { key: 'name', label: 'Nome' },
 *     { key: 'price', label: 'Preço', render: (item) => `R$ ${item.price}` }
 *   ]}
 *   sortColumn={sortColumn}
 *   sortDirection={sortDirection}
 *   onSort={handleSort}
 *   renderActions={(item) => <Actions onEdit={...} onDelete={...} />}
 * />
 */
export function EntityTable<T extends { id?: string }>({
  data,
  columns,
  loading = false,
  emptyMessage = "Nenhum item encontrado.",
  sortColumn,
  sortDirection,
  onSort,
  renderActions,
  getRowKey = (item) => item.id || String(Math.random()),
  pagination,
}: EntityTableProps<T>) {
  if (loading) {
    return <Loading />;
  }

  if (data.length === 0) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        color: 'var(--text-secondary)',
        background: 'var(--surface)',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <>
      <Table.TableContainer>
        <table>
          <thead>
            <Table.TableRow>
              {columns.map((column, index) => (
                <Table.TableHeader
                  key={String(column.key || `action-${index}`)}
                  column={{
                    key: column.key as string,
                    label: column.label,
                    sortable: column.sortable ?? true,
                  }}
                  sortColumn={sortColumn as string}
                  sortDirection={sortDirection || 'ascending'}
                  onSort={(key) => onSort && onSort(key as keyof T)}
                />
              ))}
              {renderActions && (
                <Table.TableHeader
                  column={{ label: "Ações", sortable: false }}
                  sortColumn={sortColumn as string}
                  sortDirection={sortDirection || 'ascending'}
                  onSort={() => {}}
                />
              )}
            </Table.TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <Table.TableRow key={getRowKey(item)}>
                {columns.map((column, index) => (
                  <td key={String(column.key || `cell-${index}`)}>
                    {column.render
                      ? column.render(item)
                      : String(item[column.key as keyof T] ?? "")}
                  </td>
                ))}
                {renderActions && renderActions(item)}
              </Table.TableRow>
            ))}
          </tbody>
        </table>
      </Table.TableContainer>

      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          totalItems={pagination.totalItems}
          pageSize={pagination.pageSize}
          onPageChange={pagination.onPageChange}
          onPageSizeChange={pagination.onPageSizeChange}
          canGoPrevious={pagination.canGoPrevious}
          canGoNext={pagination.canGoNext}
          pageSizeOptions={pagination.pageSizeOptions}
        />
      )}
    </>
  );
}

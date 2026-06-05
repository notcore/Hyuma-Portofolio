import type { ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────

export type ColumnAlign = "left" | "center" | "right";

export interface ColumnDef<T = Record<string, unknown>> {
  key: keyof T & string;
  header: string;
  width?: string;
  align?: ColumnAlign;
  headerAlign?: ColumnAlign;
  render?: (value: T[keyof T], row: T, index: number) => ReactNode;
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: ColumnDef<T>[];
  data: T[];
  showRowNumber?: boolean;
  rowNumberLabel?: string;
  rowNumberStart?: number;
  className?: string;
}

export interface DataTableHeadProps<T = Record<string, unknown>> {
  columns: ColumnDef<T>[];
  showRowNumber?: boolean;
  rowNumberLabel?: string;
}

export interface DataTableRowProps<T = Record<string, unknown>> {
  row: T;
  rowIndex: number;
  columns: ColumnDef<T>[];
  showRowNumber?: boolean;
  rowNumberStart?: number;
}

// ─── Helpers ─────────────────────────────────────────────

const alignClass: Record<ColumnAlign, string> = {
  left:   "text-left",
  center: "text-center",
  right:  "text-right",
};

// ─── Sub-components ──────────────────────────────────────

export function DataTableHead<T = Record<string, unknown>>({
  columns,
  showRowNumber = false,
  rowNumberLabel = "No",
}: DataTableHeadProps<T>) {
  return (
    <thead>
      <tr className="border-b bg-slate-50 text-slate-500 uppercase text-xs text-left">
        {showRowNumber && (
          <th className="w-12 px-4 py-2 text-center">{rowNumberLabel}</th>
        )}
        {columns.map((col) => (
          <th
            key={col.key}
            className={[
              col.width ?? "",
              "px-4 py-2",
              alignClass[col.headerAlign ?? col.align ?? "left"],
            ].join(" ")}
          >
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function DataTableRow<T = Record<string, unknown>>({
  row,
  rowIndex,
  columns,
  showRowNumber = false,
  rowNumberStart = 1,
}: DataTableRowProps<T>) {
  return (
    <tr className="hover:bg-slate-50/50">
      {showRowNumber && (
        <td className="px-4 py-2.5 text-center font-mono text-slate-400">
          {rowNumberStart + rowIndex}
        </td>
      )}
      {columns.map((col) => (
        <td
          key={col.key}
          className={["px-4 py-2.5", alignClass[col.align ?? "left"]].join(" ")}
        >
          {col.render
            ? col.render(row[col.key], row, rowIndex)
            : (row[col.key] as ReactNode)}
        </td>
      ))}
    </tr>
  );
}

export function DataTable<T = Record<string, unknown>>({
  columns,
  data = [],
  showRowNumber = false,
  rowNumberLabel = "No",
  rowNumberStart = 1,
  className = "",
}: DataTableProps<T>) {
  return (
    <div className={`overflow-x-auto rounded-lg ${className}`}>
      <table className="w-full text-sm">
        <DataTableHead
          columns={columns}
          showRowNumber={showRowNumber}
          rowNumberLabel={rowNumberLabel}
        />
        <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
          {data.map((row, i) => (
            <DataTableRow
              key={i}
              row={row}
              rowIndex={i}
              columns={columns}
              showRowNumber={showRowNumber}
              rowNumberStart={rowNumberStart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;


// ─────────────────────────────────────────────────────────
// CONTOH PENGGUNAAN (dengan type safety penuh)
// ─────────────────────────────────────────────────────────

/**
 * interface AlatBahan {
 *   name: string;
 *   qty: number;
 *   specs: string[];
 * }
 *
 * const columns: ColumnDef<AlatBahan>[] = [
 *   { key: "name",  header: "Alat dan Bahan" },
 *   { key: "qty",   header: "Jumlah", width: "w-16", align: "center" },
 *   {
 *     key: "specs",
 *     header: "Spesifikasi",
 *     render: (specs) => (
 *       <div className="flex flex-wrap gap-1">
 *         {(specs as string[]).map((s, i) => (
 *           <span key={i} className="text-xs bg-slate-50 rounded px-1.5 py-0.5 text-slate-500">
 *             {s}
 *           </span>
 *         ))}
 *       </div>
 *     ),
 *   },
 * ];
 *
 * // Full table
 * <DataTable<AlatBahan>
 *   columns={columns}
 *   data={alatDanBahan}
 *   showRowNumber
 *   rowNumberStart={1}
 * />
 *
 * // Head only
 * <DataTableHead<AlatBahan> columns={columns} showRowNumber />
 *
 * // Row only
 * <DataTableRow<AlatBahan>
 *   row={item}
 *   rowIndex={i}
 *   columns={columns}
 *   showRowNumber
 *   rowNumberStart={1}
 * />
 */
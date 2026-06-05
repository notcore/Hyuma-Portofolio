type Column<T> = {
  key: keyof T | "no";
  label: string;
  render?: (item: T, index: number) => React.ReactNode;
  className?: string;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  showNo?: boolean;
};

export function DataTable<T>({ data, columns, showNo = true }: DataTableProps<T>) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b bg-slate-50 text-slate-500 uppercase text-xs text-left">
          {columns.map((col, i) => (
            <th key={i} className="px-4 py-2">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-100 text-slate-600 text-sm">
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-slate-50/50">
            {columns.map((col, i) => {
              if (col.key === "no") {
                return (
                  <td key={i} className="px-4 py-2.5 text-center font-mono text-slate-400">
                    {index + 1}
                  </td>
                );
              }

              return (
                <td key={i} className={col.className || "px-4 py-2.5"}>
                  {col.render
                    ? col.render(item, index)
                    : String(item[col.key])}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
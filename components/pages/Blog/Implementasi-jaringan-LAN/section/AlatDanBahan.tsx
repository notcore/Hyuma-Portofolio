import H3 from "@/components/ui/typografi/H3";
import Paragraph from "@/components/ui/typografi/Paragraph";
import DataTable, { ColumnDef } from "@/components/ui/Table";

const alatDanBahan = [
  {
    no: 1,
    name: "PC Client",
    qty: 1,
    specs: ["Intel Core i3-7100 @ 3.90GHz", "RAM 4GB", "HDD 1TB"],
  },
  {
    no: 2,
    name: "PC Server",
    qty: 1,
    specs: ["Intel Core i3-7100 @ 3.90GHz", "RAM 4GB", "HDD 1TB"],
  },
  {
    no: 3,
    name: "Switch",
    qty: 1,
    specs: ["8 Port", "10/100 Mbps"],
  },
  {
    no: 4,
    name: "Router",
    qty: 1,
    specs: ["5 Port", "Support DHCP"],
  },
  {
    no: 5,
    name: "Kabel UTP",
    qty: 3,
    specs: ["1 Meter", "Cat5e"],
  },
  {
    no: 6,
    name: "Konektor RJ-45",
    qty: 6,
    specs: ["Cat5e"],
  },
  {
    no: 7,
    name: "Crimping Tool",
    qty: 1,
    specs: ["Mendukung Konektor RJ45"],
  },
  {
    no: 8,
    name: "Cable Tester",
    qty: 1,
    specs: ["Mendukung Kabel UTP dan RJ45"],
  },
  {
    no: 9,
    name: "Koneksi Internet",
    qty: 1,
    specs: ["ISP"],
  },
];

interface AlatBahan {
  no: number;
  name: string;
  qty: number;
  specs: string[];
}

// 2. Definisiin columns
const columns: ColumnDef<AlatBahan>[] = [
  { key: "name", header: "Alat dan Bahan" },
  { key: "qty", header: "Jumlah", width: "w-16", align: "center" },
  {
    key: "specs",
    header: "Spesifikasi",
    render: (value) => {
      const specs = value as string[];
      return (
        <div className="flex flex-wrap gap-1">
          {specs.map((spec, i) => (
            <span
              key={i}
              className="text-xs bg-slate-50 rounded px-1.5 py-0.5 text-slate-500"
            >
              {spec}
            </span>
          ))}
        </div>
      );
    },
  },
];

export default function AlatDanBahan() {
  return (
    <section className="space-y-3">
      <H3>Alat dan bahan</H3>
      <DataTable<AlatBahan>
        columns={columns}
        data={alatDanBahan}
        showRowNumber
        rowNumberStart={1}
      />
    </section>
  );
}

import DataTable from "@/components/DataTable";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      printer: "Canon 32cccccc0",
      name: "toner1",
      value: "5",
      code: "056154656565",
    },
    {
      printer: "Canon 3225120",
      name: "toner2",
      value: "2",
      code: "056154656566",
    },
    {
      printer: "Canon 3cccccc20",
      name: "toner3",
      value: "8",
      code: "056154656567",
    },
    {
      printer: "Canon 3ccccccc20",
      name: "toner4",
      value: "10",
      code: "056154656568",
    },
  ];

  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Esamos prekės</h1>

      <DataTable data={data} />
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/scanner"
      >
        Skenuoti
      </Link>
    </main>
  );
}

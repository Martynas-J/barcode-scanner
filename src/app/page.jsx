import DataTable from "@/components/DataTable";
import Link from "next/link";
import jsonData from "/data";
import Form from "@/components/Form";

export default function Home() {
  const tableData = jsonData;
  //   const handleFormSubmit = (formData) => {
  //   const newData = [...data, { code: (data.length + 1).toString(), ...formData }];
  //   setData(newData);
  // };

  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Esamos prekės</h1>

      <DataTable data={tableData} />
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/scanner"
      >
        Skenuoti
      </Link>

      <Form />
    </main>
  );
}

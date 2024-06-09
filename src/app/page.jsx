"use client";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import jsonData from "/data";
import Form from "@/components/Form";
import Loading from "@/components/Loading/Loading";
import { FromDb } from "@/Functions/simpleFunctions";
import { API_URL } from "./config/config";
import { toast } from "react-toastify";

export default function Home() {
  const tableData = jsonData;
  const { result, isLoading, mutate } = FromDb(`getResults`);

  if (isLoading) {
    return <Loading />;
  }
  const saveResult = async (value) => {
    try {
      const response = await fetch(`${API_URL}/api/saveResult/95632656564556`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemValue: value }),
      });
  
      if (response.ok) {
        mutate();
        toast.success("veikia")
        return response;
      } else {
        console.error("Failed to save the result.");
        return response;
      }
    } catch (error) {
      console.error("Error while saving the result:", error);
    }
  };
  
  //   const handleFormSubmit = (formData) => {
  //   const newData = [...data, { code: (data.length + 1).toString(), ...formData }];
  //   setData(newData);
  // };

  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Esamos prekės</h1>

      <DataTable data={result} />
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/scanner"
      >
        Skenuoti
      </Link>
      <button onClick={() => saveResult(1)}>cia test button</button>

      <Form />
    </main>
  );
}

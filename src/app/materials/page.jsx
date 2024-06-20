"use client";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import { FromDb } from "@/Functions/simpleFunctions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchForm from "@/components/SearchForm";

export default function Materials() {
  const { status } = useSession();
  const router = useRouter();
  const { result, isLoading, mutate } = FromDb(`getResults`);
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (result) {
      setFilteredResult(result);
    }
  }, [result]);

  if (isLoading) {
    return <Loading />;
  }
  const handleSearch = (searchQuery) => {
    const query = searchQuery.toLowerCase();
    const filtered = result.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(query)
      )
    );
    setFilteredResult(filtered);
  };

  return (
    <main className="flex  flex-col  sm:items-center  gap-5 pt-5">
      <h1 className="text-2xl font-bold text-center">Esamos prekės <Link href="/statistics">📈</Link></h1>
      <SearchForm handleSearch={handleSearch} />
      <div className="flex sm:gap-20 justify-end gap-28 px-2">
        <div>
          <Link
            className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
            href="/scanner"
          >
            Skenuoti
          </Link>
        </div>
        <div className="">
          <Link className="text-center" href="/#">
            Atgal
          </Link>
        </div>
      </div>
      <DataTable data={filteredResult} />
    </main>
  );
}

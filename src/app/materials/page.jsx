"use client";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import { FromDb } from "@/Functions/simpleFunctions";
import {  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SearchForm from "@/components/SearchForm";

export default function Materials() {
  const { status } = useSession();
  const router = useRouter();
  const { result, isLoading, mutate } = FromDb(`getResults`);
  useEffect(() => {
    if (status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [status, router]);

  if (isLoading) {
    return <Loading />;
  }
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
};
  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Esamos prekės</h1>
      <SearchForm searchHandler={handleSearch}/>
      <DataTable data={result} />
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/scanner"
      >
        Skenuoti
      </Link>
      <div className="mt-5">
        <Link className="text-center" href="/#">
          Atgal
        </Link>
      </div>
    </main>
  );
}

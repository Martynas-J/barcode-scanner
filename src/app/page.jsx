"use client";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Form from "@/components/Form";
import Loading from "@/components/Loading/Loading";
import { FromDb } from "@/Functions/simpleFunctions";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  const { result, isLoading, mutate } = FromDb(`getResults`);

  if (isLoading) {
    return <Loading />;
  }
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
      {status === "authenticated" && (
        <button onClick={signOut} className="hover:text-red-500 pt-5">
          Atsijungti
        </button>
      )}
    </main>
  );
}

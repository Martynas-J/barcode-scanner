"use client";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import { FromDb } from "@/Functions/simpleFunctions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchForm from "@/components/SearchForm";
import { toast } from "react-toastify";
import { saveResult } from "@/components/SaveResults";

export default function Materials() {
  const { status, data } = useSession();
  const router = useRouter();
  const { result, isLoading, mutate } = FromDb(`getResults`);
  const [filteredResult, setFilteredResult] = useState([]);
  const userName = data?.user?.name;

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
    const filtered = result.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query)
      )
    );
    setFilteredResult(filtered);
  };

  const handleResetSearch = () => {
    setFilteredResult(result);
  };

  const handleDelete = async (item) => {
    if (window.confirm(`Ar tikrai norite ištrinti ${item.itemName}?`)) {
      try {
        const response = await fetch(`/api/deleteResults/${item.code}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const result2 = await saveResult("saveStatistics", {
            user: userName,
            model: item.itemName,
            count: item.itemValue,
            action: "Ištrinta",
          });
          if (result2.ok) {
            toast.success(`${item.itemName} sėkmingai ištrinta`);
          } else {
            toast.error("Nepavyko išsaugoti statistikos");
          }

          mutate();
        } else {
          toast.error("Nepavyko ištrinti prekės");
        }
      } catch (error) {
        toast.error("Įvyko klaida bandant ištrinti prekę");
      }
    }
  };
  return (
    <main className="flex flex-col sm:items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold text-center">
        Esamos prekės <Link href="/statistics">📈</Link>
      </h1>
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
          <Link onClick={handleResetSearch} className="text-center" href="#">
            Atgal
          </Link>
        </div>
      </div>
      <DataTable data={filteredResult} handleDelete={handleDelete} />
    </main>
  );
}

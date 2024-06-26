"use client";

import Link from "next/link";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [status, router]);

  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Galimos veiklos</h1>
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/materials"
      >
        Medžiagos
      </Link>
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/inventory"
      >
        Inventorius
      </Link>
      {status === "authenticated" && (
        <button onClick={signOut} className="hover:text-red-500 pt-5">
          Atsijungti
        </button>
      )}
    </main>
  );
}

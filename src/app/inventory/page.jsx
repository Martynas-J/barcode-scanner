"use client";

import Link from "next/link";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Inventory() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [status, router]);

  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Inventorius</h1>
      <div>In progress...</div>
      {status === "authenticated" && (
        <div className="mt-5">
          <Link className="text-center" href="/#">
            Atgal
          </Link>
        </div>
      )}
    </main>
  );
}

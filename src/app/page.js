import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center gap-5 p-24">
      Laba diena
      <Link className=' text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500' href='/scanner'>Skenuoti</Link>
    </main>
  );
}

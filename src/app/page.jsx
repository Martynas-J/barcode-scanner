import Link from "next/link";

export default function Home() {
  const data = [
    { printer: "Canon 320", name: "toner1", code: "056154656565", value: "5" },
    { printer: "Canon 3225120", name: "toner2", code: "056154656566", value: "2" },
    { printer: "Canon 320", name: "toner3", code: "056154656567", value: "8" },
    { printer: "Canon 320", name: "toner4", code: "056154656568", value: "10" },
  ];

  return (
    <main className="flex  flex-col items-center gap-5 pt-5">
      <h1 className="text-2xl font-bold">Esamos prekės</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Spauzdintuvas
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Prekė
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Likutis
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.code}
                className="even:bg-gray-50 dark:even:bg-gray-700 odd:bg-white dark:odd:bg-gray-800"
              >
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  {item.printer}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  {item.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                  {item.value} vnt.
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        className=" text-xl border rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-500"
        href="/scanner"
      >
        Skenuoti
      </Link>
    </main>
  );
}

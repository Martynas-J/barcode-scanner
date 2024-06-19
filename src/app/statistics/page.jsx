"use client";
import { FromDb } from '@/Functions/simpleFunctions';
import { STATHEADER } from '@/config/config';
import React from 'react'

const Statistics = () => {
    const { result, isLoading, mutate } = FromDb(`getStatistics`);
    console.log(result)
  return (
    <div className="container mx-auto text-center">
    <h1 className="text-2xl font-bold pb-2">Statistika</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            {STATHEADER.map((header) => (
              <th
                key={header}
                className="py-2 px-2 border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100 text-center dark:bg-gray-700  text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result?.map((item) => (
            <tr
              key={item._id}
              className={`even:bg-gray-50 dark:even:bg-gray-700 odd:bg-white dark:odd:bg-gray-800`}
            >
              {Object.values(item)
                .slice(1, 6)
                .map((value, index) => (
                  <td
                    key={index}
                    className="py-2 px-2 border-b text-center border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {index === 2 ? (
                      <span
                        className={`${value > 0 ? "text-green-500 font-bold": "text-red-500 font-bold"}`}
                      >{`${value} vnt.`}</span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Statistics
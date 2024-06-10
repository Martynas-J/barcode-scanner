// components/DataTable.js

import { TABLEHEADER } from '@/config/config';
import React from 'react';

const DataTable = ({ data }) => {
  data.sort((a, b) => a.itemValue - b.itemValue);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            {TABLEHEADER.map((header) => (
              <th
                key={header}
                className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100 text-center dark:bg-gray-700  text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.code}
              className={`${item.itemValue < 1 ? "bg-green-300":"even:bg-gray-50 dark:even:bg-gray-700 odd:bg-white dark:odd:bg-gray-800"}`}
            >
              {Object.values(item).slice(1, 4).map((value, index)  => (
                <td
                  key={index}
                  className="py-2 px-4 border-b text-center border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  {index === 2 ? <span className={`${value < 3 && 'text-red-500 font-bold'}`}>{`${value} vnt.`}</span> : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

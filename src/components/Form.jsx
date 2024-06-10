"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [printer, setPrinter] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ printer, name, value: parseInt(value) });
    setPrinter('');
    setName('');
    setValue('');
  };

  const inputClass = "mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
  const labelClass = "block text-sm font-medium text-gray-700";
  const buttonClass = "w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100";

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-center">

      <div className="mb-4">
        <label htmlFor="printer" className={labelClass}>
          Spausdintuvas
        </label>
        <input
          type="text"
          id="printer"
          value={printer}
          required
          onChange={(e) => setPrinter(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className={labelClass}>
          Prekė
        </label>
        <input
          type="text"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="value" className={labelClass}>
          Likutis
        </label>
        <input
          type="number"
          id="value"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
          className={inputClass}
        />
      </div>
      <button type="submit" className={buttonClass}>
        Pridėti
      </button>
      <Link className="flex text-center bg-gray-800 border-2 shadow-xl border-gray-800 text-white py-3 px-6 rounded-md font-bold  hover:bg-white hover:text-gray-800  focus:outline-none  focus:bg-white focus:text-gray-800 " href="/#">Atgal</Link>
    </form>

  );
};

export default Form;

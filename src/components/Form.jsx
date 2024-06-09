"use client"
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const session = useSession();
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

  return (
    <form onSubmit={handleSubmit} className="mt-4">
            {session.status === "authenticated" && (
        <button onClick={signOut} className="hover:text-red-500">
          Atsijungti
        </button>
      )}
      <div className="mb-4">
        <label htmlFor="printer" className="block text-sm font-medium text-gray-700">
          Spauzdintuvas
        </label>
        <input
          type="text"
          id="printer"
          value={printer}
          onChange={(e) => setPrinter(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Prekė
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="value" className="block text-sm font-medium text-gray-700">
          Likutis
        </label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Pridėti
      </button>
    </form>
  );
};

export default Form;

// pages/scanner.js
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ButtonComponent from "@/components/ButtonComponent";
import Link from "next/link";
import { FromDb } from "@/Functions/simpleFunctions";
import { saveResult } from "@/components/SaveResults";
import DataTable from "@/components/DataTable";
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/navigation";

// Dynamically import the BarcodeScanner to avoid server-side rendering issues
const BarcodeScanner = dynamic(() => import("/src/components/BarcodeScanner"), {
  ssr: false,
});

const ScannerPage = () => {
  const router = useRouter();
  const [scannedCode, setScannedCode] = useState("");
  const [error, setError] = useState("");
  const { result, isLoading, mutate } = FromDb(`getResults`);

  const handleDetected = (code) => {
    setScannedCode(code);
  };
  const addHandler = (scannedCode) => {
    saveResult(scannedCode, { itemValue: 1 }, mutate, "Pridėta");
  };
  const minusHandler = (scannedCode) => {
    saveResult(scannedCode, { itemValue: -1 }, mutate, "Išimta");
  };
  const addNewHandler = (scannedCode) => {
    //saveResult(scannedCode, -1, mutate, "Nauja pridėta");
    router.push(`/newAdd?code=${encodeURIComponent(scannedCode)}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold">Brūkšninių kodų skeneris</h1>
      <Link className="tex" href="/#">Atgal</Link>
      {/* <DataTable data={result} /> */}
      {!scannedCode && <BarcodeScanner onDetected={handleDetected} />}
      {scannedCode && (
        <div>
          <h2>Nuskaitytas kodas:</h2>
          <p className="text-red-600">{scannedCode}</p>
          <h3 className="py-3 font-bold">Veiksmai:</h3>
          <div className="flex  gap-3 justify-center">
            <ButtonComponent onClick={() => addHandler(scannedCode)}>
              Pridėti
            </ButtonComponent>
            <ButtonComponent onClick={() => minusHandler(scannedCode)}>Išimti</ButtonComponent>
            <ButtonComponent onClick={() => addNewHandler(scannedCode)}>Nauja</ButtonComponent>
          </div>
          <Link className=" bg-gray-800 border-2 shadow-xl border-gray-800 text-white py-3 px-6 rounded-md font-bold  hover:bg-white hover:text-gray-800  focus:outline-none  focus:bg-white focus:text-gray-800 " href="/#">Atgal</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>Klaida:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ScannerPage;

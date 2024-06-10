// pages/scanner.js
"use client";

import React, { useState } from "react";

import ButtonComponent from "@/components/ButtonComponent";
import Link from "next/link";
import { FromDb } from "@/Functions/simpleFunctions";
import { saveResult } from "@/components/SaveResults";
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/navigation";
import { useScanDetector } from 'react-barcode-reader';

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
    router.push(`/newAdd?code=${encodeURIComponent(scannedCode)}`);
  };

  useScanDetector({
    onDetected: (result) => {
      console.log('Detected:', result);
      handleDetected(result);
    },
    onError: (err) => {
      console.error('Detection error:', err);
      setError("Nuskaitymo klaida: " + err.message);
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold">Brūkšninių kodų skeneris</h1>
      {!scannedCode && (
        <div className="scanner-area">
          <p>Nukreipkite brūkšninį kodą į skenavimo sritį</p>
        </div>
      )}
      {scannedCode && (
        <div>
          <h2>Nuskaitytas kodas:</h2>
          <p className="text-red-600">{scannedCode}</p>
          <h3 className="py-3 font-bold">Veiksmai:</h3>
          <div className="flex gap-3 justify-center">
            <ButtonComponent onClick={() => addHandler(scannedCode)}>
              Pridėti
            </ButtonComponent>
            <ButtonComponent onClick={() => minusHandler(scannedCode)}>Išimti</ButtonComponent>
            <ButtonComponent onClick={() => addNewHandler(scannedCode)}>Nauja</ButtonComponent>
          </div>
        </div>
      )}
      {error && (
        <div>
          <h2>Klaida:</h2>
          <p>{error}</p>
        </div>
      )}
      <div className="mt-10">
        <Link className="text-center" href="/#">Atgal</Link>
      </div>
    </div>
  );
};

export default ScannerPage;

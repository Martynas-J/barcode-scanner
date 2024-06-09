// pages/scanner.js
'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the BarcodeScanner to avoid server-side rendering issues
const BarcodeScanner = dynamic(() => import('/src/components/BarcodeScanner'), { ssr: false });

const ScannerPage = () => {
    const [scannedCode, setScannedCode] = useState('');
    const [error, setError] = useState('');
  
    const handleDetected = (code) => {
      setScannedCode(code);
    };
  
    return (
      <div>
        <h1>Brūkšninių kodų skaneris</h1>
        {!scannedCode && <BarcodeScanner onDetected={handleDetected} />}
        {scannedCode && (
          <div>
            <h2>Nuskaitytas kodas:</h2>
            <p>{scannedCode}</p>
            <p>{console.log(scannedCode)}</p>
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
// pages/scanner.js
'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ButtonComponent from '@/components/ButtonComponent';
import Link from 'next/link';

// Dynamically import the BarcodeScanner to avoid server-side rendering issues
const BarcodeScanner = dynamic(() => import('/src/components/BarcodeScanner'), { ssr: false });

const ScannerPage = () => {
    const [scannedCode, setScannedCode] = useState('');
    const [error, setError] = useState('');
  
    const handleDetected = (code) => {
      setScannedCode(code);
    };
    const addHandler = (scannedCode) => {
      
    };
  
    return (
      <div className='container mx-auto text-center'>
        <h1>Brūkšninių kodų skaneris</h1>
        <Link href="/#">Atgal</Link>
        {!scannedCode && <BarcodeScanner onDetected={handleDetected} />}
        {scannedCode && (
          <div>
            <h2>Nuskaitytas kodas:</h2>
            <p>{scannedCode}</p>
            <h3>Veiksmai</h3>
            <div className='flex  gap-3 justify-center'>
            <ButtonComponent onClick={()=>addHandler(scannedCode)}>Pridėti</ButtonComponent>
            <ButtonComponent>Išimti</ButtonComponent>
            </div>
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
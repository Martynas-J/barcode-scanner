"use client"
import { useSearchParams } from 'next/navigation';
import Form from '@/components/Form';
import React, { Suspense } from 'react';
import { FromDb } from '@/Functions/simpleFunctions';
import Loading from '@/components/Loading/Loading';

const NewAdd = () => {
    const { result, isLoading, mutate } = FromDb(`getResults`);
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const onSubmit = (data) => {
        alert(`Printer: ${data.printer}, Name: ${data.name}, Value: ${data.value}`);
        saveResult(code, { itemValue: -1 }, mutate, "Pridėta nauja");
    };
    if (isLoading) {
        return <Loading />;
      }
    return (
        <div>
            <div>Nauja prekė</div>
            <p>Prekės kodas: {code}</p>
            <Form onSubmit={onSubmit} />
        </div>
    );
};

const NewAddPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <NewAdd />
    </Suspense>
);

export default NewAddPage;

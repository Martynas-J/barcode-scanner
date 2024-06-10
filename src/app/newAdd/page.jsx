"use client"
import { useSearchParams } from 'next/navigation';
import Form from '@/components/Form';
import React, { Suspense } from 'react';

const NewAdd = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    return (
        <div>
            <div>Nauja prekė</div>
            <p>Received value: {code}</p>
            <Form />
        </div>
    );
};

const NewAddPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <NewAdd />
    </Suspense>
);

export default NewAddPage;

"use client"
import { useSearchParams } from 'next/navigation';
import Form from '@/components/Form';
import React, { Suspense } from 'react';

const NewAdd = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const onSubmit = (data) => {
        <p>{data.printer}</p>
      };
    return (
        <div>
            <div>Nauja prekė</div>
            <p>Prekės kodas: {code}</p>
            <Form onSubmit={onSubmit(data)}/>
        </div>
    );
};

const NewAddPage = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <NewAdd />
    </Suspense>
);

export default NewAddPage;

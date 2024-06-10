"use client"
import Form from '@/components/Form'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const NewAdd = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    return (
        <div>
            <div>Nauja prekė</div>
            <p>Received value: {code}</p>
            <Form />
        </div>
    )
}

export default NewAdd
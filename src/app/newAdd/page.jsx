"use client"
import Form from '@/components/Form'
import { useRouter } from 'next/navigation';
import React from 'react'

const NewAdd = () => {
    const router = useRouter();
    const { code } = router.query;

    return (
        <div>
            <div>Nauja prekė</div>
            <p>Received value: {code}</p>
            <Form />
        </div>
    )
}

export default NewAdd
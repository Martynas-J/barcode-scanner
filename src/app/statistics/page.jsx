"use client";
import { FromDb } from '@/Functions/simpleFunctions';
import React from 'react'

const Statistics = () => {
    const { result, isLoading, mutate } = FromDb(`getStatistics`);
    console.log(result)
  return (
    <div className="container mx-auto text-center">
    <h1 className="text-2xl font-bold">Statistika</h1>
    
  </div>
  )
}

export default Statistics
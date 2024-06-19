"use client";
import { FromDb } from '@/Functions/simpleFunctions';
import React from 'react'

const Statistics = () => {
    const { result, isLoading, mutate } = FromDb(`getStatistics`);
    console.log(result)
  return (
    <div>Statistics</div>
  )
}

export default Statistics
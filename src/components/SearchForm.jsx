"use client"
import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Perform search action here
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
            />
            <ButtonComponent onClick={handleSearch}>Search</ButtonComponent>
        </div>
    );
};

export default SearchForm
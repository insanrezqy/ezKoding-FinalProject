import React, { useState, useEffect } from 'react';

function SearchBar() {
    const [keyword, setkeyword] = useState('');   

    const handleChange = (e) => {
        setkeyword(e.target.value);
    }

    return (
        <div className='flex justify-start justify-items-center bg-blue-800 gap-24'>
            <h1 className='text-3xl text-white mb-4 mt-6 '>AcaraKu</h1>
            <input id='search' type='text' className='border border-teal-500 px-2 py-2 rounded-md mb-4 mt-6 w-80' placeholder='Search' value={keyword} onChange={handleChange}></input>
        </div>
    );
}

export default SearchBar;
import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = () => {
    return (
        <div className='search'>
            <MdSearch className='search-icons'></MdSearch>
            <input type='text' placeholder='type to search. . .' />
        </div>
    )
}

export default Search
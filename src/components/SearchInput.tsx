import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoClose } from 'react-icons/io5'
import '../style/search-input.scss'

const SearchInput = () => {

    const [search, setSearch] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className={search ? 'search-bar' : 'shorted-search'}>
            <GoSearch 
                size={24}
                color='#fff'
                className='search-icon'
                onClick={() => setSearch(true)}
            />
            <input 
                className='search-input'
                placeholder='Title, people, genres'
                type='text' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IoClose 
                onClick={() => {
                    setValue('')
                    setSearch(false)
                }}
                className='close-input'
                color='#fff' 
                size={24}
                />
        </div>
    )
}

export default SearchInput;
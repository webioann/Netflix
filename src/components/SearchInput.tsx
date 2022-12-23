import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import CloseButton from './CloseButton'
import { IoClose } from 'react-icons/io5'

import '../style/search-input.scss'

const SearchInput = () => {

    const [search, setSearch] = useState(false)
    const [value, setValue] = useState('')

    const onCloseInput = () => { 
        setValue('')
        setSearch(false)
    }

    return (
        <div className={search ? 'search' : 'shorted-search'}>
            <GoSearch 
                size={24}
                color='#fff'
                className='search-icon'
                onClick={() => {
                    setSearch(!search)
                    setValue('')
                }}
            />
            <input 
                type='text' 
                value={value}
                className='search-input'
                onChange={(e) => setValue(e.target.value)}
            />
            <IoClose 
                onClick={onCloseInput}
                className='close-input'
                color='#fff' 
                size={24}
                />
        </div>
    )
}
export default SearchInput;
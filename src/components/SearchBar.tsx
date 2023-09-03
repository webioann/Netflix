import React, { useState, useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoClose } from 'react-icons/io5'

import { useLazyMultiSearchQuery } from '../redux/SEARCH_API'
import '../style/search-bar.scss'

const SearchBar = () => {

    const [barIsActive, setBarIsActive] = useState(false)
    const [value, setValue] = useState('')


    const moch = 'barbi'
    const [ startSearch, { data: search_result }] = useLazyMultiSearchQuery()
    
    useEffect(() =>{
        startSearch({ search: moch })
    }, [])
    console.log(search_result)


    return (
        <div className={barIsActive ? 'search-bar' : 'shorted-search-bar'}>
            <GoSearch 
                size={24}
                color='#fff'
                className='search-icon'
                onClick={() => {
                    setBarIsActive(true)

                }}
            />
            <input 
                className='search-input'
                placeholder='Movies, people, genres...'
                type='text' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IoClose 
                onClick={() => {
                    setValue('')
                    setBarIsActive(false)
                }}
                className='close-input'
                color='#fff' 
                size={24}
                />
        </div>
    )
}

export default SearchBar;
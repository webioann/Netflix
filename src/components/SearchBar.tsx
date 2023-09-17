import React, { useState, useEffect, useRef } from 'react'
import { useAppDispatch } from '../redux/store'
import { useLazySearchMovieQuery } from '../redux/SEARCH_API'
import { setSearchResults, setSearchQuery } from '../redux/redux'
import { useLocation } from 'react-router-dom';
import { GoSearch } from 'react-icons/go'
import { IoClose } from 'react-icons/io5'
import '../style/search-bar.scss'

const SearchBar = () => {

    const [barIsActive, setBarIsActive] = useState(false)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const [ fetchSearchMovies, { data: movies } ] = useLazySearchMovieQuery()
    let location = useLocation(); 
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickSearchIcon = () => {
        // on first click by icon button
        if(  value.length < 3 ) {
            setBarIsActive(true)
            // reseting searchResults before new searching
            dispatch(setSearchResults(null))
            // reseting search query before insert new search query
            dispatch(setSearchQuery(null))
        }
        // on second click with not empty input field
        if(  value.length >= 3 ) {
            // start searching ({ search: value })
            fetchSearchMovies({ search: value })
            // save search qury on redux
            dispatch(setSearchQuery(value))
            // setBarIsActive(false)
            setValue('')
        }
    }

    useEffect(() => {
        movies && dispatch(setSearchResults(movies))
    }, [movies])

    useEffect(() => {
        dispatch(setSearchResults(null))
        setValue('')
        setBarIsActive(false)
    }, [location.key])

    return (
        <div className={barIsActive ? 'search-bar' : 'shorted-search-bar'}>
            <GoSearch 
                size={24}
                color='#fff'
                className='search-icon'
                onClick={onClickSearchIcon}
            />
            <input 
                className='search-input'
                placeholder='Title, people, genres...'
                type='text'
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <IoClose 
                onClick={() => {
                    setValue('')
                    setBarIsActive(false)
                    // dispatch(setSearchResults(null))
                }}
                className='close-input'
                color='#fff' 
                size={24}
                />
        </div>
    )
}

export default SearchBar;
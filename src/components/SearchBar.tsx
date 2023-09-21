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
    const [renderThisComponent, setRenderThisComponent] = useState(true)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const [ fetchSearchMovies, { data: movies } ] = useLazySearchMovieQuery()
    let location = useLocation(); 
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        movies && dispatch(setSearchResults(movies))
    }, [movies])

    useEffect(() => { // reset states if page changed
        dispatch(setSearchResults(null))
        setValue('')
        setBarIsActive(false)
    }, [location.key])
    
    // === prohibits searching when on the pages Account, My List 
    useEffect(() => {
        if(location.pathname === "/my_list") {
            setRenderThisComponent(false)
        }
        else if(location.pathname === "/account") {
            setRenderThisComponent(false)
        }
        else { setRenderThisComponent(true) }
    }, [location.pathname])

    const onClickSearchIcon = () => {
        if( value.length == 0 ) {
            dispatch(setSearchResults(null))
            dispatch(setSearchQuery(null))
        }
        // on first click by icon button
        if(  value.length < 3 ) {
            setBarIsActive(true)
            inputRef.current?.focus()
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
            inputRef.current?.blur()
            // setBarIsActive(false)
            setValue('')
        }
    }

    if( renderThisComponent ) {
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
                        dispatch(setSearchQuery(null))
                        dispatch(setSearchResults(null))
                    }}
                    className='close-input'
                    color='#fff' 
                    size={24}
                    />
            </div>
        )
    } else { return null }
}

export default SearchBar;
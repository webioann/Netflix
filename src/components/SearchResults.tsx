import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../redux/store'
import { IMovie } from '../types/movies.types'
import '../style/search-results.scss'

const SearchResults = () => {

    const searchResults = useAppSelector(state => state.redux.searchResults)

    if(searchResults) {
        return (
            <section className='search-results'>
                <p style={{ width: '28ch' }}
                    className='search-results-title'>
                    Explore titles relates to :
                </p>
                <ul className='search-results-list'>
                    { searchResults.slice(0,10).map((item) => (
                        <li key={item.id} className='one-search-result'>
                            <span>{ item.name ? item.name : item.title }</span>
                            <i style={{ color: 'rgba(255, 255, 255, 0.2)' }}>&#160;&#160;&#160;&#124;</i>
                        </li>
                    )) }
                </ul>
            </section>
        )
    }
    else { return null }

}

export default SearchResults
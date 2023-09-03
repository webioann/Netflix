import React, { createContext } from 'react'
import { PageContext } from '../context/Context_API'
import { childrenType } from '../types/global.types'

const Movies_Page: React.FC<childrenType> = ({children}) => {

    const media = {
        media: 'movie',
        other: 'movies other context'
    }

    return (
        <div>
            <PageContext.Provider value={media}>
                { children }
            </PageContext.Provider>
        </div>
    )
}

export default Movies_Page
import React from 'react'
import { PageContext } from '../context/Context_API'
import { childrenType } from '../types/global.types'

const TvShows_Page: React.FC<childrenType> = ({children}) => {

    const media = {
        media: 'tv',
        other: 'tv shows other context'
    }

    return (
        <div>
            <PageContext.Provider value={media}>
                { children }
            </PageContext.Provider>
        </div>
    )
}

export default TvShows_Page
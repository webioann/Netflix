import React from 'react'
import { PageContext } from '../context/Context_API'
import { childrenType } from '../types/global.types'

const Home_Page: React.FC<childrenType> = ({children}) => {

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

export default Home_Page
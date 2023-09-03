import React, { createContext } from 'react'

interface movies_page_props {
    children: JSX.Element[] | JSX.Element 
}
export const PageContext = createContext({})


const Movies_Page_Wrapper: React.FC<movies_page_props> = ({children}) => {

    const media = {
        media: 'movie'
    }

    return (
        <div>
            <PageContext.Provider value={media.media}>
                { children }
            </PageContext.Provider>
        </div>
    )
}

export default Movies_Page_Wrapper
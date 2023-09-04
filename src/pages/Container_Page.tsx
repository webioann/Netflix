import React, { createContext, ReactNode } from 'react'

type pageContextType = {
    media_type: 'movie' | 'tv'
}
type pagePropsType = {
    children: ReactNode[] | ReactNode 
    media_type: 'movie' | 'tv'
}

export const PageContext = createContext<pageContextType>( {} as pageContextType )

const Container_Page: React.FC<pagePropsType> = ({ children, media_type }) => {

    const pageInnerState: pageContextType = {
        media_type: media_type
    }

    return (
        <PageContext.Provider value={pageInnerState}>
            <div>
                { children }
            </div>
        </PageContext.Provider>
    )
}

export default Container_Page;
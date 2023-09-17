import React, { createContext, ReactNode } from 'react'

type pageContextType = {
    media: 'movie' | 'tv'
}
type pagePropsType = {
    children: ReactNode[] | ReactNode 
    media: 'movie' | 'tv'
}

export const PageContext = createContext<pageContextType>( {} as pageContextType )

const Container_Page: React.FC<pagePropsType> = ({ children, media }) => {

    const pageInnerState: pageContextType = {
        media: media
    }

    return (
        <PageContext.Provider value={pageInnerState}>
            <div style={{ position: 'relative' }}>
                { children }
            </div>
        </PageContext.Provider>
    )
}

export default Container_Page;
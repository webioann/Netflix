import React from 'react'

type childrenType = {
    children: JSX.Element[] | JSX.Element 
}

const PageWrapper: React.FC<childrenType> = ({children}) => {
    return (
        <div>{ children }</div>
    )
}

export default PageWrapper;
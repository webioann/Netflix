import React from 'react'
import { childrenType } from '../types/global.types'

const PageWrapper: React.FC<childrenType> = ({children}) => {
    return (
        <div>{ children }</div>
    )
}

export default PageWrapper;
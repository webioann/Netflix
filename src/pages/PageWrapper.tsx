import React from 'react'
import { IChildrenProps } from '../types/global.types'

const PageWrapper: React.FC<IChildrenProps> = ({children}) => {
    return (
        <div>{ children }</div>
    )
}

export default PageWrapper;
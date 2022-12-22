import React from 'react'
import { IChildrenProps } from '../types/global.types'

const Home_page: React.FC<IChildrenProps> = ({children}) => {
    return (
        <div>{ children }</div>
    )
}
export default Home_page;
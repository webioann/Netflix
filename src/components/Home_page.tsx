import React from 'react'
import { IChildrenProps } from '../types/global.types'
import '../style/home-page.scss'

const Home_page: React.FC<IChildrenProps> = ({children}) => {
    return (
        <div>{ children }</div>
    )
}
export default Home_page;
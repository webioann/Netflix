import React from 'react'
import { IChildrenProps } from '../types/global.types'
import '../style/container.scss'

const Container: React.FC<IChildrenProps> = ({children}) => {

    return (
        <div>{ children }</div>
    )
}
export default Container;
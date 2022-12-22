import React from 'react'

type ContainerProps = {
    children: JSX.Element[] | JSX.Element
    scroll: boolean
}

const Container: React.FC<ContainerProps> = ({children, scroll}) => {

    document.body.style.overflow = scroll ? 'hidden' : 'scroll'

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            position: 'relative'
        }}>
            { children }
        </div>
    )
}
export default Container;
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
            // maxWidth: '1600px',
            // marginLeft: 'auto',
            // marginRight: 'auto',
            minHeight: '100vh',
            position: 'relative'
        }}>
            { children }
        </div>
    )
}
export default Container;
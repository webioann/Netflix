import React from 'react'

type ContainerProps = {
    children: JSX.Element[] | JSX.Element
    width: string
}

const Container: React.FC<ContainerProps> = ({ width, children }) => {

    return (
        <div style={{
            width: '100%',
            maxWidth: width,
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '100%',
            position: 'relative',
        }}>
            { children }
        </div>
    )
}

export default Container;
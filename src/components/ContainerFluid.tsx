import React, { useEffect } from 'react'

type ContainerFluidProps = {
    children: JSX.Element[] | JSX.Element
    scroll: boolean
}

const ContainerFluid: React.FC<ContainerFluidProps> = ({children, scroll}) => {
    // remove scroll if video player is play selected video
    document.body.style.overflow = scroll ? 'hidden' : 'scroll'

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: '#111',
        }}>
            { children }
        </div>
    )
}

export default ContainerFluid;
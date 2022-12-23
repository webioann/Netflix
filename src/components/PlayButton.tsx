import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {

    const [play, setPlay] = useState(false)

    return (
        <button>
            <FaPlay/>
            Play
        </button>
    )
}
export default PlayButton;
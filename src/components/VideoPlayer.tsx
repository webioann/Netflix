import React, { useState } from 'react'
import YouTube from 'react-youtube'

type VideoPlayerProps = {
    open: boolean
    data: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({open, data}) => {

    const options = {
        height: '432',
        width: '100%',
        playerVars: { autoplay: 1, }
    }

    if( open && data ) {
        return (
            <div style={{ width: '100%', height: '432', backgroundColor: '#111'}}>
                <YouTube videoId={data} opts={options}/>
            </div>
        )
    }
    else  return null
}
export default VideoPlayer;
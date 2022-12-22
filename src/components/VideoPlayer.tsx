import React from 'react'
import YouTube from 'react-youtube'

type VideoPlayerProps = {
    open: boolean
    data: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({open, data}) => {

    const options = {
        height: '360',
        width: '100%',
        playerVars: { 
            autoplay: 1, 
        }
    }

    return (
        <div style={{
            width: '100%'
        }}>
            { open && <YouTube videoId={data} opts={options}/>}
        </div>
    )
}
export default VideoPlayer;
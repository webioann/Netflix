import React from 'react'
import ReactPlayer from 'react-player'

type VideoPlayerProps = {
    data: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ data }) => {

    if( data ) {
        return (
            <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#111'}}>
                <ReactPlayer
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    url={`https://www.youtube.com/watch?v=${data}`}
                    playing={true}
                    controls={true}
                    muted={false}
                    width='100%'
                    height='100%'
                />
            </div>
        )
    }
    else  return null
}

export default VideoPlayer;


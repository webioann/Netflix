import { useState, useEffect } from 'react'
import { IVideoParams } from '../types/video.types'
import { IMovie } from '../types/movies.types'

export const useObjectCompleter = (movieObj: IMovie, defaultValue: 'movie' | 'tv') => {

    const [videoParam, setVideoParams] = useState<IVideoParams>({} as IVideoParams)
    const [ newMovie, setNewMovie ] = useState<IMovie>({} as IMovie)

    useEffect(() => {
        let objKeyArray = Object.keys(movieObj)
        let hasOwnMediaType = objKeyArray.some((item) => item === 'media_type')
        if( hasOwnMediaType === true && movieObj.media_type !== undefined) {
            setNewMovie({...movieObj})
            setVideoParams({
                movie_id: movieObj.id,
                media_type: movieObj.media_type
            })
        }
        else{
            setNewMovie({
                ...movieObj,
                media_type: defaultValue
            })
            setVideoParams({
                movie_id: movieObj.id,
                media_type: defaultValue
            })

        }
    }, [movieObj, defaultValue])

    return { videoParam, newMovie }
};


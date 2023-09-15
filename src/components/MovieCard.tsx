import React, { useContext } from 'react'
import { PageContext } from '../pages/Container_Page';
import { useObjectCompleter } from '../hooks/useObjectCompleter';
import { IMovie } from '../types/movies.types';
import GenresList from './GenresList'
import MoviePoster from './MoviePoster'
import MovieNameExtractor from './MovieNameExtractor'
import Button_PlayVideo from './Button_PlayVideo'
import Button_VolumeOff from './Button_VolumeOff'
import Button_Like from './Button_Like'
import Button_Dislike from './Button_Dislike'
import Button_SaveInMyList from './Button_SaveInMyList'
import '../style/movie-card.scss'

interface IMovieCard {
    movie: IMovie
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
    
    const { media } = useContext(PageContext)
    const { videoParam, newMovie } = useObjectCompleter(movie, media)
    
    return (
        <li className='movie-card'>
            <MoviePoster movie={movie} size={290}/>
            <div className="movie-card-controls">
                <div className="poster-controls-info">
                    <Button_PlayVideo videoParam={videoParam}/>
                    <MovieNameExtractor movie={movie} fontSizeInRem={1} fontWeight={400}/>
                    <GenresList genres={movie?.genre_ids} font={10}/>
                </div>
                <div className="poster-controls-buttons">
                    <Button_VolumeOff/>
                    <Button_Like/>
                    <Button_Dislike/>
                    <Button_SaveInMyList movie={newMovie} />
                </div>
            </div>
        </li>
    )
}

export default MovieCard;
    // const [videoParam, setVideoParams] = useState<IVideoParams>({
    //     movie_id: movie.id,
    //     media_type: media
    // })
    // const [ suppMovie, setSuppMovie ] = useState<IMovie>(movie)

    // useEffect(() => {
    //     let objKeyArray = Object.keys(movie)
    //     let hasOwnMediaType = objKeyArray.some((item) => item === 'media_type')
    //     if( hasOwnMediaType === true && movie.media_type) {
    //         setVideoParams({
    //             movie_id: movie.id,
    //             media_type: movie.media_type
    //         })
    //         setSuppMovie({
    //             ...movie
    //         })
    //     }
    //     else{
    //         setVideoParams({
    //             movie_id: movie.id,
    //             media_type: media
    //         })
    //         setSuppMovie({
    //             ...movie,
    //             media_type: media
    //         })
    //     }
    // }, [])

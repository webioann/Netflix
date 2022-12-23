export interface IMovie {
    backdrop_path: string
    media_type?: string
    release_data?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name?: string
    title?: string
    origin_country: string[]
    original_language:string
    original_name?: string
    original_title?: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}
export interface IVideo {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}
export interface IMoviesDataResponse {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}
export interface IVideoDataResponse {
    id: number
    results: IVideo[]
}

export interface IBanerMovie {
    img: string
    name: string
    overview: string
    id: number
}
export interface TypeOfMovie {
    type: 
    'Bloopers' 
    | 'Featurette' 
    |'Behind of Scenes' 
    | 'Clip' 
    | 'Trailer' 
    |'Teaser'
}
export interface IGenres {
    id: number
    name: string
}

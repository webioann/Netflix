export interface IMovie {
    backdrop_path: string
    media_type?: 'tv' | 'movie'
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

export interface IMoviesDataResponse {
    page: number
    results: IMovie[]
    total_pages: number
    total_results: number
}
export interface TypeOfMovie {
    type: 
    | 'Bloopers' 
    | 'Featurette' 
    | 'Behind of Scenes' 
    | 'Clip' 
    | 'Trailer' 
    | 'Teaser'
}
export interface IGenres {
    id: number
    name: string
}

export interface IErrorServerResponse {
    success: boolean
    status_code: number
    status_message: string
}

export interface IMovieData {
    adult: boolean
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    media_type: string
    name: string
    origin_country: string[]
    original_language:string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}
export interface ITrendingMovies {
    results: IMovieData[]
}
export interface ITrendingDataResponse {
    page: number
    results: IMovieData[]
    total_pages: number
    total_results: number
}


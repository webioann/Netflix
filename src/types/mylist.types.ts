export interface IMyListMovies {
    doc_id: string 
    backdrop_path: string
    media_type: 'movie' | 'tv' 
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
};

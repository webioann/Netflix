// type for data stored on Firestore
// export interface IMyList {
//     movie_name: string
//     movie_id: number
//     media_type: 'movie' | 'tv'
//     genres_list: number[]
//     overview: string
//     image_url: string
//     doc_id: string
// }
export interface IMyListMovies {
    doc_id: string | undefined
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

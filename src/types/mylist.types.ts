// type for data stored on Firestore
export interface IMyList {
    movie_name: string
    movie_id: number
    media_type: 'movie' | 'tv'
    genres_list: number[]
    overview: string
    image_url: string
    doc_id: string
}
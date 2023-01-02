import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type selectedMovieType = {
    media_type: 'movie' | 'tv'
    movie_id: number
}

type InitialStateType = {
    currentUser: ICurrentUser | null
    modalIsOpen: boolean
    selectedMovie: selectedMovieType | null
    trailerVideoURL: string | null
}
// const storedCurrentUser = localStorage.getItem('storedCurrentUser')
// let userFromLocalStorage
// if( storedCurrentUser ) {
//     userFromLocalStorage = JSON.parse(storedCurrentUser)
// }
// else{ userFromLocalStorage = null }

const initialState: InitialStateType = {
    currentUser: null,
    modalIsOpen: false,
    selectedMovie: null,
    trailerVideoURL: null
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        createCurrentUser: (state, actions) => {
            state.currentUser = {
                currentUser_Name: actions.payload.userName, 
                currentUser_Email: actions.payload.email,
                currentUser_ID: actions.payload.userID,
                currentUser_PhotoURL: actions.payload.userPhotoURL,
            }
            // localStorage.setItem("storedCurrentUser", JSON.stringify(state.currentUser));
        },
        deleteCurrentUser: (state) => {
            state.currentUser = null
            // localStorage.removeItem('storedCurrentUser');
        },
        openModal: (state) => { state.modalIsOpen = true },
        closeModal: (state) => { state.modalIsOpen = false },
        selectMovie: (state, actions) => { state.selectedMovie = {
            media_type: actions.payload.media_type,
            movie_id: actions.payload.movie_id
        }},
        resetMovieData: (state) => { state.selectedMovie = null },
        startVideoPlayer: (state, actions) => {
            state.selectedMovie = null
            state.modalIsOpen = true
            state.selectedMovie = {
                media_type: actions.payload.media_type,
                movie_id: actions.payload.movie_id
            }
        },


        setTrailerVideoURL: (state, actions) => {
            state.trailerVideoURL = actions.payload
        },
    }
});

export const { 
    createCurrentUser,
    deleteCurrentUser,
    openModal,
    closeModal,
    selectMovie,
    resetMovieData,
    startVideoPlayer,
    setTrailerVideoURL
    
} = reduxSlice.actions;

export default reduxSlice.reducer;
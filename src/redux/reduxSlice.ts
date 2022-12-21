import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type selectedMovieType = {
    media_type: string
    movie_id: number
}

type InitialStateType = {
    currentUser: ICurrentUser | null
    modalIsOpen: boolean
    movieID: number | null
    selectedMovie: selectedMovieType | null
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
    movieID: 0,
    selectedMovie: null
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
        selectMovieID: (state, actions) => { state.movieID = actions.payload },
        selectMovie: (state, actions) => { state.selectedMovie = {
            media_type: actions.payload.media_type,
            movie_id: actions.payload.movie_id
        }},
        resetMovieData: (state) => { state.selectedMovie = null },
    }
});

export const { 
    createCurrentUser,
    deleteCurrentUser,
    openModal,
    closeModal,
    selectMovieID,
    selectMovie,
    resetMovieData,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;
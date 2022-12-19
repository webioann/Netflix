import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type selectedMovieData = {
    mediaType: string
    movieID: string
}

type InitialStateType = {
    currentUser: ICurrentUser | null
    modalIsOpen: boolean
    selectedMovie: selectedMovieData | null
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
        selectTheMovie: (state, actions) => {
            state.selectedMovie = {
                mediaType: actions.payload.media_type,
                movieID: actions.payload.movie_id
            }
        }
    }
});

export const { 
    createCurrentUser,
    deleteCurrentUser,
    openModal,
    closeModal,
    selectTheMovie,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;
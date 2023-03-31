import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'
// import { IMyListMovies } from '../types/mylist.types'

type selectedMovieType = {
    media_type: 'movie' | 'tv'
    movie_id: number
}

type InitialStateType = {
    currentUser: ICurrentUser | null
    selectedMovie: selectedMovieType | null
    startVideoPlayer: boolean
    myListState: string[]
}

const initialState: InitialStateType = {
    currentUser: null,
    selectedMovie: null,
    startVideoPlayer: false,
    myListState: ['0'],
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
        selectMovie: (state, actions) => { state.selectedMovie = {
            media_type: actions.payload.media_type,
            movie_id: actions.payload.movie_id
        }},
        resetMovieData: (state) => { state.selectedMovie = null },
        switchVideoPlayer:  (state, actions) => { state.startVideoPlayer = actions.payload },
        setMyListState: (state, actions) => { state.myListState = actions.payload },
    }
});

export const { 
    createCurrentUser,
    deleteCurrentUser,
    selectMovie,
    resetMovieData,
    switchVideoPlayer,
    setMyListState,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;
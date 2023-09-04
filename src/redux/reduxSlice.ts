import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'
import { IMovie } from '../types/movies.types'

type selectedMovieType = {
    media_type: 'movie' | 'tv'
    movie_id: number
}

type InitialStateType = {
    user: ICurrentUser | null
    selectedMovie: selectedMovieType | null
    startVideoPlayer: boolean
    bannerReStarter: boolean
}

const initialState: InitialStateType = {
    user: null,
    selectedMovie: null,
    startVideoPlayer: false,
    bannerReStarter: false
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        createCurrentUser: (state, actions) => {
            state.user = {
                name: actions.payload.userName, 
                email: actions.payload.email,
                user_id: actions.payload.userID,
                photoURL: actions.payload.userPhotoURL,
            }
            // localStorage.setItem("storedUser", JSON.stringify(state.user));
        },
        deleteCurrentUser: (state) => {
            state.user = null
            // localStorage.removeItem('storedUser');
        },
        selectMovie: (state, actions) => { state.selectedMovie = {
            media_type: actions.payload.media_type,
            movie_id: actions.payload.movie_id
        }},
        resetSelectedMovie: (state) => { state.selectedMovie = null },
        switchVideoPlayer:  (state, actions) => { state.startVideoPlayer = actions.payload },
        reStartBanner: state => { state.bannerReStarter = !state.bannerReStarter }
    }
});

export const { 
    createCurrentUser,
    deleteCurrentUser,
    selectMovie,
    resetSelectedMovie,
    switchVideoPlayer,
    reStartBanner,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;
import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type selectedMovieType = {
    media_type: 'movie' | 'tv'
    movie_id: number
}

type InitialStateType = {
    selectedMovie: selectedMovieType | null
    startVideoPlayer: boolean
    bannerReStarter: boolean
}

const initialState: InitialStateType = {
    selectedMovie: null,
    startVideoPlayer: false,
    bannerReStarter: false
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
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
    selectMovie,
    resetSelectedMovie,
    switchVideoPlayer,
    reStartBanner,
    
} = reduxSlice.actions;

export default reduxSlice.reducer;
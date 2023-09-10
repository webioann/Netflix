import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type selectedMovieType = {
    media_type: 'movie' | 'tv'
    movie_id: number
}

type InitialStateType = {
    selectedMovie: selectedMovieType | null;
    bannerReStarter: boolean;
    videoIsPlaying: boolean
}

const initialState: InitialStateType = {
    selectedMovie: null,
    bannerReStarter: false,
    videoIsPlaying: false
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
        reStartBanner: state => { state.bannerReStarter = !state.bannerReStarter },
        startPlayVideo: state => { state.videoIsPlaying = true },
        stopPlayVideo: state => { state.videoIsPlaying = false },
    }
});

export const { 
    selectMovie,
    resetSelectedMovie,
    reStartBanner,
    startPlayVideo,
    stopPlayVideo

} = reduxSlice.actions;

export default reduxSlice.reducer;
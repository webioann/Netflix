import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { IMovie } from '../types/movies.types'
import { actions } from "../data/requests"
import { IVideoParams } from '../types/video.types'


// type selectedMovieType = {
//     media_type: 'movie' | 'tv'
//     movie_id: number
// }

type InitialStateType = {
    selectedMovie: IVideoParams | null;
    videoIsPlaying: boolean;
    searchResults: IMovie[] | null;

    IDsList: number[];
    watchList: IMovie[] | null;
}

const initialState: InitialStateType = {
    selectedMovie: null,
    videoIsPlaying: false,
    searchResults: null,

    IDsList: [],
    watchList: null,
}

export const redux = createSlice({
    name: "redux",
    initialState,
    reducers: {
        // selectMovie: (state, actions) => { state.selectedMovie = {
        //     media_type: actions.payload.media_type,
        //     movie_id: actions.payload.movie_id
        // }},
        selectMovie: (state, actions) => { state.selectedMovie = actions.payload },

        resetSelectedMovie: (state) => { state.selectedMovie = null },
        startPlayVideo: state => { state.videoIsPlaying = true },
        stopPlayVideo: state => { state.videoIsPlaying = false },
        setSearchResults: (state, actions) => { state.searchResults = actions.payload },
        createWatchList: (state, actions) => { state.watchList = actions.payload },
        deleteWatchList: state => { state.watchList = null },
    }
});

export const { 
    selectMovie,
    resetSelectedMovie,
    startPlayVideo,
    stopPlayVideo,
    setSearchResults,
    createWatchList,
    deleteWatchList

} = redux.actions;

export default redux.reducer;
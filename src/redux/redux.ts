import { createSlice } from "@reduxjs/toolkit"
import { IMovie } from '../types/movies.types'
import { IVideoParams } from '../types/video.types'
import { actions } from "../data/requests";

type InitialStateType = {
    selectedMovie: IVideoParams | null;
    videoIsPlaying: boolean;
    searchResults: IMovie[] | null;
    searchQuery: string | null;
    watchList: IMovie[] | null;
}

const initialState: InitialStateType = {
    selectedMovie: null,
    videoIsPlaying: false,
    searchResults: null,
    searchQuery: null,
    watchList: null,
}

export const redux = createSlice({
    name: "redux",
    initialState,
    reducers: {
        // === selected movie for plaing in VideoPlayer_Modal ===
        selectMovie: (state, actions) => { state.selectedMovie = actions.payload },
        resetSelectedMovie: (state) => { state.selectedMovie = null },

        // === open or close video player ===
        startPlayVideo: state => { state.videoIsPlaying = true },
        stopPlayVideo: state => { state.videoIsPlaying = false },

        //  === work with search results ===
        setSearchResults: (state, actions) => { state.searchResults = actions.payload },

        // === search query saving and reseting ===
        getSerchQuery: (state, actions) => { state.searchQuery = actions.payload },
        resetSerchQuery: (state) => { state.searchQuery = null },
        
        // === creating, updating and deleting My List ===
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
    deleteWatchList,
    getSerchQuery,
    resetSerchQuery,
    

} = redux.actions;

export default redux.reducer;
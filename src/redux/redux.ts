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
    IDList: number[]
}

const initialState: InitialStateType = {
    selectedMovie: null,
    videoIsPlaying: false,
    searchResults: null,
    searchQuery: null,
    watchList: null,
    IDList: [],
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
        setSearchQuery: (state, actions) => { state.searchQuery = actions.payload },
        
        // === creating, updating and deleting My List ===
        createWatchList: (state, actions) => { state.watchList = actions.payload },
        deleteWatchList: state => { state.watchList = null },

        // === put id in array or clear his
        fillIDList: (state, actions) => { state.IDList = actions.payload },
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
    setSearchQuery,
    fillIDList

} = redux.actions;

export default redux.reducer;
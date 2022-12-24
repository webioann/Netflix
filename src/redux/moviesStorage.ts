import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { IMovie, IVideo } from "../types/movies.types"

type InitialStateType = {
    movies: IMovie[] | null
}
// const storedCurrentUser = localStorage.getItem('storedCurrentUser')
// let userFromLocalStorage
// if( storedCurrentUser ) {
//     userFromLocalStorage = JSON.parse(storedCurrentUser)
// }
// else{ userFromLocalStorage = null }

const initialState: InitialStateType = {
    movies: null
}

export const movies_storage = createSlice({
    name: "movies_storage",
    initialState,
    reducers: {
        saveMoviesOnStorage: (state, actions) => { state.movies = actions.payload },
        deleteMoviesFromStorage: (state) => { state.movies = null },
    }
});

export const { 
    saveMoviesOnStorage,
    deleteMoviesFromStorage,
    
} = movies_storage.actions;

export default movies_storage.reducer;
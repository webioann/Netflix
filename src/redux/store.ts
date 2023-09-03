import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import { allMovies_api } from './allMovies_api'
import { randomMovie_api } from './randomMovie_api'
import { moviesByGenre_api } from './moviesByGenre_api'
import { GENRES_LIST_API } from './GENRES_API'
import { VIDEO_API } from './VIDEO_API'
import { searchMovie } from './SEARCH_API'
import reduxSlice from './reduxSlice'

const store = configureStore({
    reducer: {
        redux: reduxSlice,
        [allMovies_api.reducerPath]: allMovies_api.reducer,
        [randomMovie_api.reducerPath]: randomMovie_api.reducer,
        [moviesByGenre_api.reducerPath]: moviesByGenre_api.reducer,
        [searchMovie.reducerPath]: searchMovie.reducer,
        [VIDEO_API.reducerPath]: VIDEO_API.reducer,
        [GENRES_LIST_API.reducerPath]: GENRES_LIST_API.reducer,
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            allMovies_api.middleware,
            randomMovie_api.middleware,
            moviesByGenre_api.middleware,
            searchMovie.middleware,
            VIDEO_API.middleware,
            GENRES_LIST_API.middleware,
        ]
    ),
})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;
export default store;
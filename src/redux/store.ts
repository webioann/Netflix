import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import { allMovies_api } from './allMovies_api'
import { BANNER_API } from './BANNER_API'
import { moviesByGenre_api } from './moviesByGenre_api'
import { GENRES_LIST_API } from './GENRES_API'
import { VIDEO_API } from './VIDEO_API'
import { searchMovie } from './SEARCH_API'
import redux from './redux'

const store = configureStore({
    reducer: {
        redux: redux,
        [allMovies_api.reducerPath]: allMovies_api.reducer,
        [BANNER_API.reducerPath]: BANNER_API.reducer,
        [moviesByGenre_api.reducerPath]: moviesByGenre_api.reducer,
        [searchMovie.reducerPath]: searchMovie.reducer,
        [VIDEO_API.reducerPath]: VIDEO_API.reducer,
        [GENRES_LIST_API.reducerPath]: GENRES_LIST_API.reducer,
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            allMovies_api.middleware,
            BANNER_API.middleware,
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
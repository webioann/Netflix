import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
// import { trendingMoviesApi } from './trendingMoviesApi'
// import { netflixOriginalsApi } from './netflixOriginalsApi'
import { moviesApi } from './moviesApi'
import reduxSlice from './reduxSlice'

const store = configureStore({
    reducer: {
        redux: reduxSlice,
        // [trendingMoviesApi.reducerPath]: trendingMoviesApi.reducer,
        // [netflixOriginalsApi.reducerPath]: netflixOriginalsApi.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer,

    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            // trendingMoviesApi.middleware,
            // netflixOriginalsApi.middleware,
            moviesApi.middleware,
        ]
    ),

})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;
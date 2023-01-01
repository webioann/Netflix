import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import { fetchMoviesData } from './fetchMoviesData'
import { VIDEO_API } from './VIDEO_API'
import { searchMovie } from './SEARCH_API'
import { testData } from './TEST_API'
import reduxSlice from './reduxSlice'

const store = configureStore({
    reducer: {
        redux: reduxSlice,
        [fetchMoviesData.reducerPath]: fetchMoviesData.reducer,
        [searchMovie.reducerPath]: searchMovie.reducer,
        [VIDEO_API.reducerPath]: VIDEO_API.reducer,


        [testData.reducerPath]: testData.reducer,

    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            fetchMoviesData.middleware,
            searchMovie.middleware,
            VIDEO_API.middleware,


            testData.middleware,
        ]
    ),
})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;
import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import { fetchMoviesData } from './fetchMoviesData'
import { testData } from './TEST_API'
import reduxSlice from './reduxSlice'

const store = configureStore({
    reducer: {
        redux: reduxSlice,
        [fetchMoviesData.reducerPath]: fetchMoviesData.reducer,
        [testData.reducerPath]: testData.reducer,

    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            fetchMoviesData.middleware,
            testData.middleware,
        ]
    ),
})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;
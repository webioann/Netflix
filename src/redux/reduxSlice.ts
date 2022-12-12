import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    defaultState: number;
}
const initialState: InitialStateType = {
    defaultState: 1,
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        incremented: (state) => {state.defaultState = state.defaultState + 1},
    }
});

export const { 
    incremented,
} = reduxSlice.actions;

export default reduxSlice.reducer;
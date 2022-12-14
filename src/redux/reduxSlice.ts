import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type InitialStateType = {
    defaultState: number;
    currentUser: ICurrentUser | null
}
const storedCurrentUser = localStorage.getItem('storedCurrentUser')
let userFromLocalStorage
if( storedCurrentUser ) {
    userFromLocalStorage = JSON.parse(storedCurrentUser)
}
else{ userFromLocalStorage = null }

const initialState: InitialStateType = {
    defaultState: 1,
    currentUser: userFromLocalStorage
}

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        incremented: (state) => {state.defaultState = state.defaultState + 1},
        createCurrentUser: (state, actions) => {
            state.currentUser = {
                currentUser_Name: actions.payload.userName, 
                currentUser_Email: actions.payload.email,
                currentUser_ID: actions.payload.userID,
                currentUser_PhotoURL: actions.payload.userPhotoURL,
            }
            localStorage.setItem("storedCurrentUser", JSON.stringify(state.currentUser));
        },
        deleteCurrentUser: (state) => {
            state.currentUser = null
            localStorage.removeItem('storedCurrentUser');
        },
    }
});

export const { 
    incremented,
} = reduxSlice.actions;

export default reduxSlice.reducer;
import { IMovie } from "../types/movies.types"

//  read stored data from sessionStorage
export const persistedState = ( stateName: string )  => {
    const storageState = sessionStorage.getItem(stateName)
    return storageState && JSON.parse(storageState)
}
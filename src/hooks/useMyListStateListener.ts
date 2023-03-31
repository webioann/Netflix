import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { setMyListState } from '../redux/reduxSlice'

export const useMyListStateListenertsts = () => {

    const dispatch = useAppDispatch()
    // const myListId = useAppSelector(state => state.redux.myListState)

    useEffect(() => {
        const fetchMyList = async () => {
            const data = await getDocs(collection(db, "my list"))
            dispatch(setMyListState(data.docs.map((doc) => doc.id )))
            // console.log('MY LIST LISTENER')
        }
        fetchMyList();

    }, [])
};
// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
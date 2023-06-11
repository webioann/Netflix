import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { setMyListState } from '../redux/reduxSlice'

export const useMyListStateListenertsts = () => {

    const dispatch = useAppDispatch()
    const myListId = useAppSelector(state => state.redux.myListState)
    const currentUserMyListRef = useAppSelector(state => state.redux.currentUser?.currentUser_List)

    useEffect(() => {
        const fetchMyList = async () => {
            if(currentUserMyListRef) {
                const data = await getDocs(collection(db, currentUserMyListRef))
                dispatch(setMyListState(data.docs.map((doc) => doc.id.toString() )))
                console.log(myListId)
            }
        }
        fetchMyList();
    }, [myListId])
};
// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
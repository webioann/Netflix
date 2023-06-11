import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { db } from '../firebase.config'
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore'
import { setMyListState } from '../redux/reduxSlice'

export const useMyListStateListenertsts = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.redux.user?.name)

    useEffect(() => {
        const fetchMyList = async () => {
            if(user) {
                const data = await getDocs(collection(db, `${user} my list`))
                dispatch(setMyListState(data.docs.map((doc) => doc.id.toString() )))
            }
        }
        fetchMyList();
    }, [])
};
// const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
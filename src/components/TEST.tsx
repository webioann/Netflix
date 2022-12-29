import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { Link } from 'react-router-dom'
import { collection, doc, getDocs, query, onSnapshot, addDoc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import './TEST.scss'
import { async } from '@firebase/util'

type user = {
    name: string
    age: number
    id: string
}

const FormRegistration = () => {

    const [value_1, setValue1] = useState('')
    const [value_2, setValue2] = useState(0)
    const [value_3, setValue3] = useState('')
    const [users, setUsers] = useState<user[] | []>([])

    const createUser = async () => {
        await addDoc(collection(db, "users"), {
            name: value_1,
            age: Number(value_2),
        })
        setValue1('')
        setValue2(0)
    }
    const deleteUser = async (id: string) => {
        const docRef = doc(db, 'users', id)
        await deleteDoc(docRef)
    }
    const updateUser = async ( id: string, newAge: number) => {
        const docRef = doc(db, 'users', id)
        await updateDoc(docRef, { age: newAge })
        setValue2(0)
    }

    useEffect(() => {
        const getUsers = async () => {
            const q = query(collection(db, "users"))
            const qSnap = onSnapshot(q, (snapShot) => {
                let raw: user[] | [] = []
                snapShot.forEach((doce) => raw.push({ ...doce.data(), id: doce.id }))
                setUsers(raw)
            })
        }
        getUsers()
    }, [])

    const city = async () => {
        await setDoc(doc(db, "cities", value_1), {
            direct: value_3,
            population: value_2
        });
    }
    const updateCity = async ( id: string, popul: number) => {
        const docRef = doc(db, "cities", id)
        await updateDoc(docRef, { 
            population: popul 
        })
        setValue2(0)
    }


    return (
        <div className='test-page'>
            <div className='test-container'>
                <input 
                    type='text' 
                    placeholder='city name'
                    onChange={event => setValue1(event.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='population'
                    onChange={event => setValue2(Number(event.target.value))}
                />
                <input 
                    type='text' 
                    placeholder='direction'
                    onChange={event => setValue3(event.target.value)}
                />

                <button className='btn-test' onClick={createUser}>Create User</button>
                <button className='btn-test' onClick={city}>CITY</button>
                <button className='btn-test' onClick={() => {updateCity(value_1, value_2)}}>UPDATE CITY</button>
                <ul className='list'>
                    { users.map(user => (
                        <li key={user.id} className='list-item'>
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                            <button className='btn-test'
                                onClick={() => deleteUser(user.id)}>
                                    delete
                            </button>
                            <button className='btn-test' 
                                onClick={() => updateUser(user.id, value_2)}>
                                update
                            </button>
                        </li>
                    )) }
                </ul>
                <Link to={'/'}>HOME</Link>
            </div>
        </div>
    )
}

export default FormRegistration;
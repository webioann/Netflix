import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'

const  App: React.FC = () => {

  const defaultState = useAppSelector(state => state.redux.defaultState)
  return (
    <div>
      <h1>Netflix clone -- {defaultState}</h1>
    </div>
  )
}
export default App;

import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useAppSelector } from '../redux/store'
import Container from './Container'
import Header from './Header'
import Baner from './Baner'

const  App: React.FC = () => {

  const defaultState = useAppSelector(state => state.redux.defaultState)
  return (
    <Container>
      <Header/>
      <Baner/>
      <h1>Netflix -- ${defaultState}</h1>
    </Container>
  )
}
export default App;

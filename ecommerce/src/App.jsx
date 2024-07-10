import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

export function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenido a Padel Revolution Shop"/>
    </>
  )
}

export default App

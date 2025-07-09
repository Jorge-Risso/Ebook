import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import NavBar from './components/NavBar';
import Testemonial from './components/Testmonial/Testmonial'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Sobre/>
      <Testemonial/>

    </>
  )
}

export default App

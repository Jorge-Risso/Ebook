import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import NavBar from './components/NavBar';
import Testemonial from './components/Testmonial/Testimonial'
import Newsletter from './components/Newsletter/Newsletter';
import PricingCards from './components/PricingCards/PricingCards';

import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Sobre/>
      <Testemonial/>
      <Newsletter />
      <PricingCards />
      <Footer/>
    </>
  )
}

export default App

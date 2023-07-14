import React from 'react'
import './app.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main />
    <Footer />
    </>
  )
}

export default App
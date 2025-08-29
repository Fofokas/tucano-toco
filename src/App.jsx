import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import tucano from './assets/tucano.png'

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

import Header from './components/Header'


function App() {
  return (
    <>
      <Header />

      <h1>
        O tuco é legal
      </h1>

      <img src={tucano} alt="" />

      <h1>sexo</h1>
    </>
  )
}

export default App

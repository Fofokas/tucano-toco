import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import tucano from './assets/tucano.png'
import tucano_sleep from "./assets/tucano_sleep.jpeg"

import teucaninho032 from "./assets/teucaninho032.jpg"

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

import Header from './components/Header'


function App() {
  return (
    <>
      <Header />
      
      <h1>
        tucano toco ou tucanuçu
      </h1>

      {/*<h1>Nome ciêntifico: </h1> <h2><i>Ramphastos toco</i></h2> */}
      
      <h2><strong>Nome Cientifico</strong>: <p>Ramphastos Toco</p> </h2>
      <h2><strong>Genero</strong>: <b>Ramphastos</b> </h2>
      <h2><strong>Familia</strong>: <b>Ramphastidae</b> </h2>
      <h2><strong>Ordem</strong>: <b>Piciformes</b> </h2>
      <h2><strong>Classe</strong>: Aves</h2>
      <h2><strong>Filo</strong>: Chordata</h2>
      <h2><strong>Reino</strong>: animalia</h2>
      <h2><strong>Habitat</strong>: Matas de galeria, cerrado e capões</h2>
      <h2><strong>País/Região</strong>: Todo o Brasil, principalmente no sudeste</h2>
      <h2><strong>origem</strong>: são originários de florestas tropicais da américa latina.</h2>
      <h2><strong>Nutrição</strong>: São onívoros, comem frutas, como banana, mamões, açaí e pinha, insetos e artrópodes.</h2>
      <h2><strong>Reprodução</strong>: são ovíparos, faz ninho em arvores ocas buracos em barrancos ou em cupinzeiros. Costumam botar de dois a quatro ovos, que são incubados por 16 a 18 dias, formando bandos após a saída dos filhotes do ninho.</h2>
      <h2><strong>Corre risco de ser extinto?</strong> : LC – Pouco preocupante</h2>
      
      <h2><strong>Curiosidade legal:</strong>
      Quando dorme, se dobra de modo que diminui seu tamanho em dois terços. Coloca o bico sobre as costas e em seguida, cobre-se com a cauda.
      Gostam de pousar em torres de telefonia. 
      <img src={tucano_sleep} alt="Tucano dormindo encolhido" />
      </h2>

      <img src={tucano} alt="" />
      <img src={teucaninho032} alt="" />
    </>
  )
}

export default App

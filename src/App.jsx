import { useState } from 'react'
import './styles/App.css'
import Header from "./components/header"
import Cards from "./components/cards"

function App() {

  return (
    <>
      <Header />
      <main>  
        <Cards />  
      </main>
    </>
  )
}

export default App

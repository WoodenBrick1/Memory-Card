import './styles/App.css'
import { useState } from 'react'
import Header from "./components/header"
import Cards from "./components/cards"

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header score={score} highScore={highScore}/>
      <main>  
        <Cards setScore={setScore} setHighScore={setHighScore} score={score} highScore={highScore}/>  
      </main>
    </>
  )
}

export default App

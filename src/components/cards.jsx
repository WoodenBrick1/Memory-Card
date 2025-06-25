import {useState, useEffect} from "react"
import "../styles/cards.css"

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export default function Cards({setScore, setHighScore, score, highScore}) {
    const [cardsData, setCardsData] = useState([]);
    const [selected, setSelected] = useState([]);
    // Get the Owl House data when the game starts

    useEffect(() => {
        fetch("https://api.disneyapi.dev/character?tvShows=The%20Owl%20House")
        .then(response => response.json())
        .then(data => {
            setCardsData(data.data)
        })
        .catch(() => {
            console.log("ERROR")
        })
    }, [])


    function resetGame() {

        if (score > highScore) setHighScore(score);

        setScore(0);
        setSelected([]);
    }
    shuffle(cardsData)
    const cardsSliced = cardsData.slice(7, -1)
    const cards = cardsSliced.map(card => {
        return (
        <button className="card" key={card.name} onClick={() => {
            if (selected.includes(card.name)) {
                resetGame()
                return;
            };
            setScore(prev => prev + 1);
            setSelected(prev => [...prev, card.name])
        }}>
            <img src={card.imageUrl}></img>
            <p className="cardName">{card.name}</p>
        </button>)
    })

    return (
    <div id="cards-container"> 
       {cards}
    </div>)
}
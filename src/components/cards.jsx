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

export default function Cards() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch("https://api.disneyapi.dev/character?tvShows=The%20Owl%20House")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCardsData(data.data)
        })
        .catch(() => {
            console.log("ERROR")
        })
    }, [])

    shuffle(cardsData)
    const cards = cardsData.map(card => {
        return (
        <div className="card" key={card.name}>
            <img src={card.imageUrl}></img>
            <p className="cardName">{card.name}</p>
        </div>)
    })
    return (
    <div id="class-container"> 
       {cards}
    </div>)
}
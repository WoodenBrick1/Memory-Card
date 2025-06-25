import {useState, useEffect} from "react"
import "../styles/cards.css"

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
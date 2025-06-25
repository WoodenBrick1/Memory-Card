import "../styles/header.css"

export default function Header({score, highScore}) {
    return (
    <header>
        <h1 className="title">The Owl Cards</h1>
        <div className="score">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    </header>)
}
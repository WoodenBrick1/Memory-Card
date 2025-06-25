import "../styles/header.css"

export default function Header() {
    return (
    <header>
        <h1 className="title">The Owl Cards</h1>
        <div className="score">
            <p>Score: </p>
            <p>High Score: </p>
        </div>
    </header>)
}
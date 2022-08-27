import HighscoreForm from './HighscoreForm'

export default function WinScreen({ time }) {
    return (
        <div className="winScreen">
            <p>You found all the characters!</p>
            <p>Your time: {time} seconds</p>
            <HighscoreForm />
        </div>
    )
}

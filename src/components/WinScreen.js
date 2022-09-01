import HighscoreForm from './HighscoreForm'
import HighscoreList from './HighscoreList'

export default function WinScreen({ time, onSubmitScore, highscores }) {
    return (
        <div className="winScreen">
            <p>You found all the characters!</p>
            <p>Your time: {time} seconds</p>
            <HighscoreList highscores={highscores} />
            <HighscoreForm onSubmitScore={onSubmitScore} time={time} />
        </div>
    )
}

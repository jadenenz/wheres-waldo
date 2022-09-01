import React from 'react'

//need to sort this array by score
export default function HighscoreList({ highscores }) {
    const highscoreMap = highscores.map((score, index) => (
        <p key={index}>
            {score.name}: {score.score}s
        </p>
    ))

    return <div>{highscoreMap}</div>
}

import React from 'react'

export default function HighscoreList({ highscores }) {
    const sortedHighscores = highscores.sort((a, b) =>
        a.score > b.score ? 1 : -1
    )
    sortedHighscores.length = 5
    const highscoreMap = sortedHighscores.map((score, index) => (
        <p key={index}>
            #{index + 1} {score.name}: {score.score}s
        </p>
    ))

    return <div>Top five scores:{highscoreMap}</div>
}

import React from 'react'

export default function HighscoreForm({ time, onSubmitScore }) {
    const [name, setName] = React.useState('')
    const [displayForm, setDisplayForm] = React.useState(true)

    function handleChange(event) {
        const target = event.target
        console.log('target: ', target)
        setName(target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmitScore(time, name)
        setDisplayForm(false)
    }

    return (
        <div className="highscoreForm">
            {displayForm && (
                <form>
                    <label htmlFor="name">Submit your score</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Register your name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    ></input>

                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            )}
            {!displayForm && <p>Submitted!</p>}
        </div>
    )
}

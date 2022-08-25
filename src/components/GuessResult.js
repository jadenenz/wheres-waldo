import classNames from "classnames"


function GuessResult ( { correct}) {

    const text = correct
    ? 'You found one!'
    : "That character isn't there"

    const classes = classNames('guessResult', {
        'guessResult--correct' : correct,
        'guessResult--wrong' : !correct
    })


    return (
        <div className={classes} >
            <p>{text}</p>
        </div>
    )
}

export default GuessResult
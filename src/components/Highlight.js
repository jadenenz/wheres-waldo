import React from "react"

function Highlight( { coords, onGuess, characterCoords } ) {

    const divStyle = {
        position: 'absolute',
        left: coords.x,
        top: coords.y,
    }

    function handleCharacterClick(charName) {
        onGuess(charName)
    }

    return (
        <div style={divStyle} className="highlight--container">
            <div className="highlight--box"></div>
            <div className="highlight--buttons">
                <button onClick={() => handleCharacterClick('waldo')}>Waldo</button>
                <button onClick={() => handleCharacterClick('odlaw')}>Odlaw</button>
                <button onClick={() => handleCharacterClick('wizard')}>Wizard</button>
            </div>
        </div>
    )
}

export default Highlight
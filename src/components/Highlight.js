import React from 'react'

function Highlight({ coords, onGuess, characterCoords, foundCharacter }) {
    const divStyle = {
        position: 'absolute',
        left: coords.x,
        top: coords.y,
    }

    function handleCharacterClick(charCoordArray) {
        onGuess(charCoordArray)
        console.log(charCoordArray)
    }

    return (
        <div style={divStyle} className="highlight--container">
            <div className="highlight--box"></div>
            <div className="highlight--buttons">
                {!foundCharacter.waldo && (
                    <button
                        onClick={() =>
                            handleCharacterClick(characterCoords[0].waldo)
                        }
                    >
                        Waldo
                    </button>
                )}
                {!foundCharacter.odlaw && (
                    <button
                        onClick={() =>
                            handleCharacterClick(characterCoords[0].odlaw)
                        }
                    >
                        Odlaw
                    </button>
                )}
                {!foundCharacter.wizard && (
                    <button
                        onClick={() =>
                            handleCharacterClick(characterCoords[0].wizard)
                        }
                    >
                        Wizard
                    </button>
                )}
            </div>
        </div>
    )
}

export default Highlight

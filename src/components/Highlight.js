import React from "react"

function Highlight( { coords, checkHighlight, characterCoords } ) {

    const divStyle = {
        position: 'absolute',
        left: coords.x,
        top: coords.y,
    }

    return (
        <div style={divStyle} className="highlight--container">
            <div className="highlight--box"></div>
            <div className="highlight--buttons">
                <button onClick={() => checkHighlight(characterCoords[0].waldo)}>Waldo</button>
                <button onClick={() => checkHighlight(characterCoords[0].odlaw)}>Odlaw</button>
                <button onClick={() => checkHighlight(characterCoords[0].wizard)}>Wizard</button>
            </div>
        </div>
    )
}

export default Highlight
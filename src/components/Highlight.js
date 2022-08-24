import React from "react"

function Highlight( { coords, checkHighlight } ) {

    const divStyle = {
        position: 'absolute',
        left: coords.x,
        top: coords.y,
    }

    return (
        <div style={divStyle} className="highlight--container">
            <div className="highlight--box"></div>
            <div className="highlight--buttons">
                <button onClick={checkHighlight}>Waldo</button>
                <button>Odlaw</button>
                <button>Wizard</button>
            </div>
        </div>
    )
}

export default Highlight
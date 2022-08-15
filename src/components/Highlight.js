import React from "react"

function Highlight( { coords } ) {

    const divStyle = {
        position: 'absolute',
        left: coords.x 
    }

    return (
        <div style="" className="highlight--container">
            <div className="highlight--box"></div>
            <div className="highlight--buttons">
                <button>Waldo</button>
                <button>Odlaw</button>
                <button>Wizard</button>
            </div>
        </div>
    )
}

export default Highlight

// https://reactjs.org/docs/dom-elements.html#style look into how to style here
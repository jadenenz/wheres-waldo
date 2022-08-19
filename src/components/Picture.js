import React from "react"
import Highlight from "./Highlight"
import waldoImg from "../images/waldo-beach.jpg"

function Picture() {

    const [displayHighlight, setDisplayHighlight] = React.useState(
        {
            x: null,
            y: null,
        }
    )

    const emptyCoords = (displayHighlight.x === null && displayHighlight.y === null)


    function handleClick(e) { //got this working using layerX, we'll see if that causes problems I guess
        const x = e.nativeEvent.layerX-25 //e.pageX - e.target.offsetLeft;
        const y = e.nativeEvent.layerY-25 //e.pageY - e.target.offsetTop;
        setDisplayHighlight(
            {
                x: x,
                y: y,
            }
        )
        console.log(x,y)
    }

    return (
        <div className="picture--container">
            <div className="picture--actual-container">
            <img src={waldoImg} onClick={handleClick} alt="wheres waldo puzzle"></img>
            {!emptyCoords && <Highlight coords={displayHighlight} />}
            </div>
        </div>
    )
}

export default Picture
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

    // function displayHighlight(x,y){
    
    // }

    function handleClick(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
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
            <img src={waldoImg} onClick={handleClick} alt="wheres waldo puzzle"></img>
            {!emptyCoords && <Highlight coords={displayHighlight} />}
        </div>
    )
}

export default Picture
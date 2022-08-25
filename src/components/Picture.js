import React, { useEffect } from "react"
import Highlight from "./Highlight"
import Timer from "./Timer"
import waldoImg from "../images/waldo-beach.jpg"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0MHrloq32Hjw1VAQnUOOwDiNos5fnPM",
  authDomain: "waldo-464e1.firebaseapp.com",
  projectId: "waldo-464e1",
  storageBucket: "waldo-464e1.appspot.com",
  messagingSenderId: "1080917488934",
  appId: "1:1080917488934:web:0cfe2d6068ae3cd6b1fde7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore
const db = getFirestore()

//collection ref
const colRef = collection(db, 'waldo')



function Picture() {

    const [displayHighlight, setDisplayHighlight] = React.useState(
        {
            x: null,
            y: null,
        }
    )

    //character coordinates from the querySnapshot to validate against
    const [characterCoords, setCharacterCoords] = React.useState()

    useEffect(() => {
        async function loadCoords() {
            const recentQuery = query(colRef)
            const querySnapshot = await getDocs(recentQuery)
            // console.log('querySnapshot', querySnapshot.docs)
            let characters = []
            querySnapshot.docs.forEach((doc) => {
                characters.push(doc.data())
            })
            console.log(characters)
            setCharacterCoords(characters)
        }

        loadCoords()
    },[])

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

    function checkHighlight(charName) {
        const charNamex1 = charName[0]
        const charNamex2 = charName[2]
        const charNamey1 = charName[1]
        const charNamey2 = charName[3]
        if(charNamex1 <= displayHighlight.x && displayHighlight.x <= charNamex2 && charNamey1 <= displayHighlight.y && displayHighlight.y <= charNamey2){
            
        }
    }

    return (
        <div className="picture--container">
            <Timer />
            <div className="picture--actual-container">
            <img src={waldoImg} onClick={handleClick} alt="wheres waldo puzzle"></img>
            {!emptyCoords && <Highlight coords={displayHighlight} checkHighlight={checkHighlight} characterCoords={characterCoords} />}
            </div>
        </div>
    )
}

export default Picture
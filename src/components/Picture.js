import React, { useEffect } from 'react'
import Highlight from './Highlight'
import GuessResult from './GuessResult'
import WinScreen from './WinScreen.js'
import waldoImg from '../images/waldo-beach.jpg'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, query, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBk0MHrloq32Hjw1VAQnUOOwDiNos5fnPM',
    authDomain: 'waldo-464e1.firebaseapp.com',
    projectId: 'waldo-464e1',
    storageBucket: 'waldo-464e1.appspot.com',
    messagingSenderId: '1080917488934',
    appId: '1:1080917488934:web:0cfe2d6068ae3cd6b1fde7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

//collection ref
const colRef = collection(db, 'waldo')

function Picture() {
    const [displayHighlight, setDisplayHighlight] = React.useState({
        x: null,
        y: null,
    })

    //character coordinates from the querySnapshot to validate against
    const [characterCoords, setCharacterCoords] = React.useState(null)

    //flags to show guess alerts
    const [guessDisplay, setGuessDisplay] = React.useState(null)
    const [correctAnswer, setCorrectAnswer] = React.useState(null)

    //timeout id for guessDisplay
    const [guessDisplayTimeoutId, setGuessDisplayTimeoutId] =
        React.useState(null)

    //state that tracks if each character has been found
    const [foundCharacter, setFoundCharacter] = React.useState({
        waldo: false,
        odlaw: false,
        wizard: false,
    })

    //intiate timer
    const [time, setTime] = React.useState(0)

    //timeoutID for timer
    const [timerTimeoutId, setTimerTimeoutId] = React.useState(null)

    React.useEffect(() => {
        let interval = null
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
        }, 1000)
        setTimerTimeoutId(interval)
        return () => clearInterval(interval)
    }, [])

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
    }, [])

    const emptyCoords =
        displayHighlight.x === null && displayHighlight.y === null

    const foundAllChars =
        foundCharacter.waldo && foundCharacter.odlaw && foundCharacter.wizard

    function stopTimer() {
        clearInterval(timerTimeoutId)
    }

    function handleClick(e) {
        //got this working using layerX, we'll see if that causes problems I guess
        const x = e.nativeEvent.layerX - 25 //e.pageX - e.target.offsetLeft;
        const y = e.nativeEvent.layerY - 25 //e.pageY - e.target.offsetTop;
        setDisplayHighlight({
            x: x,
            y: y,
        })
        console.log(x, y)
    }

    function handleFoundCharacter(charCoordArray) {
        let objectProperty
        if (charCoordArray[0] === 206) {
            objectProperty = 'odlaw'
        } else if (charCoordArray[0] === 486) {
            objectProperty = 'waldo'
        } else if (charCoordArray[0] === 581) {
            objectProperty = 'wizard'
        } else {
            return
        }
        setFoundCharacter((prevFoundCharacter) => {
            return {
                ...prevFoundCharacter,
                [objectProperty]: true,
            }
        })
    }

    useEffect(() => {
        console.log(foundCharacter)
        if (
            foundCharacter.waldo &&
            foundCharacter.odlaw &&
            foundCharacter.wizard
        ) {
            stopTimer()
        }
    }, [foundCharacter])

    function handleGuess(charCoordArray) {
        const charCoordArrayx1 = charCoordArray[0]
        const charCoordArrayx2 = charCoordArray[2]
        const charCoordArrayy1 = charCoordArray[1]
        const charCoordArrayy2 = charCoordArray[3]
        //checks if selected coordinates are within the zone of selected character(charCoordArray)
        const coordsCheck =
            charCoordArrayx1 <= displayHighlight.x &&
            displayHighlight.x <= charCoordArrayx2 &&
            charCoordArrayy1 <= displayHighlight.y &&
            displayHighlight.y <= charCoordArrayy2
        if (coordsCheck) {
            setCorrectAnswer(true)
            handleFoundCharacter(charCoordArray)
        } else {
            setCorrectAnswer(false)
        }
        setGuessDisplay(true)
        clearTimeout(guessDisplayTimeoutId)
        const newId = setTimeout(() => setGuessDisplay(false), 5000)
        setGuessDisplayTimeoutId(newId)
    }

    // useEffect(() => {
    //     const guessDisplayTimeoutId = setTimeout(() => setGuessDisplay(false), 5000);
    //     if (guess !== null){
    //         setGuessDisplay(true)
    //     }
    //     return function cleanup() {
    //         clearTimeout(guessDisplayTimeoutId)
    //     }
    // },[guess])

    useEffect(() => {
        return () => {
            clearTimeout(guessDisplayTimeoutId)
        }
    }, [guessDisplayTimeoutId])

    return (
        <div className="picture--container">
            <div className="picture--actual-container">
                {guessDisplay && <GuessResult correct={correctAnswer} />}
                {foundAllChars && <WinScreen time={time} />}
                <img
                    src={waldoImg}
                    onClick={handleClick}
                    alt="wheres waldo puzzle"
                ></img>
                {!emptyCoords && (
                    <Highlight
                        coords={displayHighlight}
                        onGuess={handleGuess}
                        characterCoords={characterCoords}
                        foundCharacter={foundCharacter}
                    />
                )}
            </div>
        </div>
    )
}

export default Picture

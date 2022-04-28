import React from 'react'
import { useState } from 'react'

function Project(props) {
    let [words, setwords] = useState(" ");

    let upperHandler = () => {
        let words1 = words.toUpperCase();
        setwords(words1)
    }
    let lowerHandler = () => {
        let words2 = words.toLowerCase();
        setwords(words2)
    }
    let clearHandler = () => {
        let words3 = " "
        setwords(words3)
    }
    let onchageHdndler = (event) => {
        setwords(event.target.value)
    }
    let [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    let [darkbtn, setDarkBtn] = useState("Enable Dark Mode")

    let modeHandler = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                border:"5px solid white"
            })
            setDarkBtn("Enable Dark Mode")
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
        } setDarkBtn("Enable Light Mode")
    }
    return (
        <React.Fragment>
            <div className="container" style={myStyle}>
                <div className="mb-3my-3">
                    <h1 className='my-1'>{props.heading}</h1>
                </div>
                <div className="my-3 mx-3" >
                    <textarea className="form-control" value={words} onChange={onchageHdndler} id="my-text" rows="10" style={myStyle}></textarea>
                </div>
                <button className='btn btn-outline-primary mx-3' onClick={upperHandler}>Upper Case</button>
                <button className='btn btn-outline-primary mx-3' onClick={lowerHandler}>Lowerer Case</button>
                <button className='btn btn-outline-primary mx-3' onClick={clearHandler}>Remove Text</button>
                <div className="container my-4">
                    <h3>Your text summary</h3>
                    <p>{words.split(" ").length} words and {words.length} characters.</p>
                </div>
                <div className="container">
                    <buttton className="btn btn-primary btn-sm mx-2" onClick={modeHandler}>{darkbtn}</buttton>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Project 

import React from 'react'
import { useState } from 'react'

function Project(props) {
    let [words, setwords] = useState(" ")

    let upperHandler = ()=>{
        let words1 = words.toUpperCase();
        setwords(words1)
    }
    let lowerHandler = ()=>{
        let words2 = words.toLowerCase();
        setwords(words2)
    }
    let clearHandler = ()=>{
        let words3 = words("")
        setwords(words3)
    }
    let onchageHdndler = (event) => {
        setwords(event.target.value)   /*You will get automatically event  on onchange eventlistning*/
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="mb-3my-3">
                    <h1 className='my-1'>{props.heading}</h1>
                </div>
                <div className="my-3 mx-3">
                    <textarea className="form-control" value={words} onChange={onchageHdndler} id="my-text" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={lowerHandler}>Lower Case</button>
                <button className='btn btn-primary mx-2' onClick={upperHandler}>Uppeer Case</button>
                <button className='btn btn-primary mx-2' onClick={clearHandler}>Uppeer Case</button>
                <div className="container my-4">
                    <h3>Your text summary</h3>
                    <p>{words.split(" ").length} words and {words.length} characters</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project 

import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("HandleUpClick Botton Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("HandleUpClick Botton Clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('Enter Text Here');

    return (
        <>
            <div className="container my-5">

                <h1 className='heading text-center text-secondary'>{props.heading}</h1>

                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>

            <div className="container my-5">
                <h1 className='summary text-center text-primary'>Your Text Summary</h1>
                <p className='result text-center my-3'><b>{text.split(" ").length}</b> Words And <b>{text.length}</b> characters</p>
                <h5 className='result text-center text-success my-3'>It Can Be Read in <b>{ 0.008 * text.split(" ").length }</b> Minutes... </h5>

                <h3 className='preview my-3'>Preview</h3>
                <p className='pri-text my-2'>{text}</p>
            </div>

        </>
    )
}

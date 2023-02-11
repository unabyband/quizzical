import React from "react";

export default function Start(props) {

    return (
        <div className="startpage">
            <h1>Quizzical</h1>
            <p>Solo project - for Learn React course</p>
            <input type="number" className="questionsNumber" placeholder="5" onChange={props.getNumber} min="1" max="99"/>
            <button onClick={props.onClick}>Start quiz</button>
        </div>
    )
}

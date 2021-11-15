import React from "react";
import Available from "./Available";
import "./Contribute.css"
import { useState } from "react";

const Contribute = ({setPage, currentStory}) => {
   
    const [text, setText] = useState(null);
    
    return (
        <div className = "contribute" >
            <p> Genre: {currentStory.genre}</p>
            <p>{currentStory.text}</p>
            <div className="input"> 
                <textarea
                    type="text" 
                    id = "text"
                    onChange={e => setText(currentStory.text + "\n\n" + e.target.value)}>
                </textarea>
                <br/>
                <button onClick={()=> setPage("available")}>Back</button>
                <button onClick={()=> console.log(text)}> Submit </button>
            </div>
        </div>
    )
};

export default Contribute;
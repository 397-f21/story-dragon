import React from "react";
import Available from "./Available";
import "./Contribute.css"
import { useState } from "react";

const Contribute = ({setPage, currentStory}) => {
   
    const [text, setText] = useState(null);
    const [checkout, setCheckout] = useState(false);
    return (
        <div className = "contribute" >
            <p> Genre: {currentStory.genre}</p>
            <p>{currentStory.text}</p>
            <div className="input"> 
                {checkout?
                    <textarea
                    type="text" 
                    id = "text"
                    onChange={e => setText(currentStory.text + "\n\n" + e.target.value)}>
                </textarea>
                    :
                    <button onClick={()=> setCheckout(true)}>checkedout</button>
                }
                
                <br/>
                <button onClick={()=> setPage("available")}>Back</button>
                <button onClick={()=> console.log(text)}> Submit </button>
            </div>
        </div>
    )
};

export default Contribute;
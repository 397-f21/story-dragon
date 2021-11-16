import React from "react";
import Available from "./Available";
import "./Contribute.css"
import { useState } from "react";

const Contribute = ({ setPage, currentStory }) => {

    const [text, setText] = useState(null);
    const [checkout, setCheckout] = useState(false);
    return (
        <div className="contribute" >
            <p> Genre: {currentStory.genre}</p>
            <p>{currentStory.text}</p>
            <div className="input">
                {checkout ?
                    <div>
                        <textarea
                            type="text"
                            id="text"
                            onChange={e => setText(currentStory.text + "\n\n" + e.target.value)}>
                        </textarea>
                        <br></br>
                        <button onClick={() => console.log(text)}> Submit </button>
                    </div>
                    :
                    <button onClick={() => setCheckout(true)}>checkedout</button>

                }

                {/* <button onClick={()=> setPage("available")}>Back</button> */}

            </div>
        </div>
    )
};

export default Contribute;
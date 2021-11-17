import React from "react";
import Available from "./Available";
import "./Contribute.css"
import { useState } from "react";
import { setData } from "../utilities/firebase";

const Contribute = ({ setPage, currentStory }) => {

    const [text, setText] = useState(currentStory.text);
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
                            onChange={e => {
                                var maintext;
                                if (currentStory.text === null) {
                                    maintext = e.target.value
                                }
                                else {
                                    maintext = currentStory.text + "\n\n" + e.target.value
                                }
                                setText(maintext);
                            }}>
                        </textarea>
                        <br></br>
                        <button onClick={() => {
                            setPage("available");
                            setData("/" + currentStory.id + "/available", true)
                        }}>Cancel</button>
                        <button onClick={() => {
                            let new_contributors = currentStory.num_contributors + 1;
                            setCheckout(false);
                            setPage("available");
                            setData("/" + currentStory.id + "/text", text);
                            setData("/" + currentStory.id + "/num_contributors", new_contributors);
                            if (new_contributors >= currentStory.max_contributors) {
                                setData("/" + currentStory.id + "/available", false);
                                setData("/" + currentStory.id + "/completed", true);
                            }
                            else {
                                setData("/" + currentStory.id + "/available", true);
                            }
                        }}> Submit </button>
                    </div>
                    :
                    <button onClick={() => {
                        setCheckout(true);
                        setData("/" + currentStory.id + "/available", false)
                    }}> Check This Story Out </button>

                }

                {/* <button onClick={()=> setPage("available")}>Back</button> */}

            </div>
        </div>
    )
};

export default Contribute;
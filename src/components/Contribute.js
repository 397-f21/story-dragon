import React from "react";
import Available from "./Available";
import "./Contribute.css"
import { useState } from "react";
import { setData } from "../utilities/firebase";
import useStore from "../Store";

const Contribute = () => {
    const setPage = useStore(state => state.setPage);
    const currentStory = useStore(state => state.currentStory);
    const setCurrentStory = useStore(state => state.setCurrentStory);

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
                        <button onClick={() => {
                            setPage("available");
                            setData("/" + currentStory.id + "/available", true)
                            setCurrentStory({});
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
                            setCurrentStory({});
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
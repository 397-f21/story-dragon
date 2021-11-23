import React from "react";
import "./Contribute.css"
import { useState } from "react";
import { setData } from "../utilities/firebase";
import useStore from "../Store";

const Contribute = () => {
    const setPage = useStore(state => state.setPage);
    const currentStory = useStore(state => state.currentStory);
    const setCurrentStory = useStore(state => state.setCurrentStory);

    const [text, setText] = useState(currentStory.text);
    const [name, setName] = useState(null);
    const [checkout, setCheckout] = useState(false);
    return (
        <div className="contribute" >

            <div className="story-text">
                <div className="story-info">
                    <p className="title"> {currentStory.title} </p>
                    <p className={`tag ${currentStory.genre}`}> {currentStory.genre}</p>
                    <p className="contributors">{`${currentStory.num_contributors}/${currentStory.max_contributors} Story Parts Complete`}</p>
                </div>
            </div>

            <table className="story-text">
                <tr>
                    <td className="td-1">Story Text:</td>
                    <td className="td-2">
                        <div className="story-text-full">
                            {
                                currentStory.text.split("\n").map((chunk, i) => {
                                    return <p key={i}><br />{chunk}</p>
                                })
                            }
                        </div>
                    </td>
                </tr>
            </table>

            <div className="input">

                {checkout ?
                    <div>
                        <div>
                            <table className="inputText">
                                <tr>
                                    <td className="td-1">Your Contribution:</td>
                                    <td className="td-2">
                                        <div className="article">
                                            <textarea
                                                type="text"
                                                id="text"
                                                onChange={e => {
                                                    var maintext;
                                                    if (currentStory.text === null) {
                                                        maintext = e.target.value
                                                    }
                                                    else {
                                                        maintext = currentStory.text + "\n" + e.target.value
                                                    }
                                                    setText(maintext);
                                                }}>
                                            </textarea>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-1">Your Name:</td>
                                    <td className="td-2">
                                        <div className="name">
                                            <textarea
                                                type="name"
                                                id="name"
                                                onChange={e => {
                                                    setName(e.target.value);
                                                }}>
                                            </textarea>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <br></br>
                        </div>
                        <div className="btn">
                            <button onClick={() => {
                                setPage("available");
                                setData("/" + currentStory.id + "/available", true)
                                setCurrentStory({});
                            }}>Cancel</button>
                            <button onClick={() => {
                                console.log(name)
                                let new_contributors = currentStory.num_contributors + 1;
                                setCheckout(false);
                                setPage("available");
                                setData("/" + currentStory.id + "/text", text);
                                setData("/" + currentStory.id + "/num_contributors", new_contributors);
                                setData("/" + currentStory.id + "/names/" + currentStory.num_contributors, name);
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
                    </div>
                    :
                    <div className="btn">
                        <button onClick={() => {
                            setCheckout(true);
                            setData("/" + currentStory.id + "/available", false)
                        }}> Check This Story Out </button>
                    </div>
                }

                {/* <button onClick={()=> setPage("available")}>Back</button> */}

            </div>
        </div >
    )
};

export default Contribute;
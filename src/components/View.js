import React from "react";
import useStore from "../Store";
import "./Contribute.css"

const View = () => {
    const currentStory = useStore(state => state.currentStory);

    return (
        <div className="story-text">
            <div className="story-info">
                <p className="title"> {currentStory.title} </p>
                <p className="authors"> Authors: {currentStory.names.join(', ')}</p>
                <p className={`tag ${currentStory.genre}`}> {currentStory.genre}</p>
            </div>
            <div className="story-text-full">
                {
                    currentStory.text.split("\n").map((chunk, i) => {
                        return <p key={i}><br />{chunk}</p>
                    })
                }
            </div>
        </div>
    )
};

export default View;
import React from "react";
import useStore from "../Store";
import "./Contribute.css"

const View = () => {
    const currentStory = useStore(state => state.currentStory);

    return (
        
        <div className="story-text">
        <div className="story-info">
            <p className="title"> {currentStory.title} </p>
            <p className={`tag ${currentStory.genre}`}> {currentStory.genre}</p>
        </div>
        <p>{currentStory.text}</p> 
    </div>
        
    )
};

export default View;
import React from "react";

const View = ({setPage,currentStory}) => {
    return (
        
        <div>
            <p>{currentStory.genre}</p>
            <p>{currentStory.text}</p>
            <button onClick={()=> setPage("available")}>Back</button>
        </div>
        
    )
};

export default View;
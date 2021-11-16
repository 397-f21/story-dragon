import React from "react";
import useStore from "../Store";

const View = () => {
    const currentStory = useStore(state => state.currentStory);

    return (
        
        <div>
            <p>{currentStory.genre}</p>
            <p>{currentStory.text}</p>
            {/* <button onClick={()=> setPage("completed")}>Back</button> */}
        </div>
        
    )
};

export default View;
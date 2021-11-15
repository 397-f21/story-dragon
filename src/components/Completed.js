import React from "react";
import "./Stories.css";

const Completed = ({ completedStories, setCurrentStory, setPage }) => {
    
    let count = 0;
    return (
        <div>
            <h1>Completed Stories</h1>
            {completedStories.map((story) => {
                count += 1;
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("view"); }
                    } className="story">
                        <p>{story.text}</p>
                        <p>{story.genre}</p>
                    </div>
                )
            })}
        </div>

    )
};

export default Completed;
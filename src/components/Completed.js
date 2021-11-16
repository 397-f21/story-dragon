import React from "react";
import "./Stories.css";

const Completed = ({ completedStories, setCurrentStory, setPage }) => {
    
    let count = 0;
    return (
        <div>
            <h2 className="pageTitle">Completed Stories</h2>
            {completedStories.map((story) => {
                count += 1;
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("view"); }
                    } className="story">
                        <p className="text">{story.text}</p>
                        <p className={story.genre}>{story.genre}</p>
                    </div>
                )
            })}
        </div>

    )
};

export default Completed;
import React from "react";
import './Stories.css';

const Available = ({ availableStories, setCurrentStory, setPage }) => {

    let count = 0;
    return (
        <div>
            <h1>Available Stories</h1>
            {availableStories.map((story) => {
                count += 1;
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("contribute"); }
                    } className="story">
                        <p className="text">{story.text}</p>
                        <p className={story.genre}>{story.genre}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Available;
import React from "react";
import "./Stories.css";

const Completed = ({ completedStories, setCurrentStory, setPage }) => {
    
    let count = 0;
    return (
        <div>
            <h1>Completed Stories</h1>
            {completedStories.map((story) => {
                console.log(story);
                count += 1;
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("view"); }
                    } className="story">
                        <h2 className="title">{story.title}</h2>
                        <p className="text">{story.text}</p>
                        <p className={"tag " + story.genre}>{story.genre}</p>
                    </div>
                )
            })}
        </div>

    )
};

export default Completed;
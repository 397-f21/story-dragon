import React from "react";
import "./Stories.css";
import useStore from "../Store";

const Completed = () => {
    const completedStories = useStore(state => state.completedStories);
    const setCurrentStory = useStore(state => state.setCurrentStory);
    const setPage = useStore(state => state.setPage);
    
    let count = 0;
    return (
        <div>
            <h2 className="pageTitle" id="completed-page">Completed Stories</h2>
            {completedStories.map((story) => {
                count += 1;
                const preview = story.text.substring(0,200);
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("view"); }
                    } className="story">
                        <div className="top-row">
                            <h2 className="title">{story.title}</h2>
                            <p className={`tag ${story.genre}`}>{story.genre}</p>
                        </div>
                        <p className="text">{`${preview}...`}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default Completed;
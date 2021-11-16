import React from "react";
import './Stories.css';
import useStore from "../Story";

const Available = () => {
    const availableStories = useStore(state => state.availableStories);
    const setCurrentStory = useStore(state => state.setCurrentStory);
    const setPage = useStore(state => state.setPage);
    
    let count = 0;
    return (
        <div>
            <h1>Available Stories</h1>
            {availableStories.map((story) => {
                const preview = story.text.substring(0,200);
                count += 1;
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("contribute"); }
                    } className="story">
                        <div className="top-row">
                            <h2 className="title">{story.title}</h2>
                            <p className={`tag ${story.genre}`}>{story.genre}</p>
                        </div>
                        <p className="text">{`${preview}...`}</p>
                        <p className="contributors">{`${story.num_contributors}/${story.max_contributors} Story Parts Complete`}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Available;
import React from "react";
import './Stories.css';

const Available = ({ availableStories, setCurrentStory, setPage }) => {

    let count = 0;
    return (
        <div>
            <h1 id="available-page">Available Stories</h1>
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
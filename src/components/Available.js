import React from "react";
import './Stories.css';
import useStore from "../Store";
import { setData } from "../utilities/firebase";

const Available = () => {
    const availableStories = useStore(state => state.availableStories);
    const setCurrentStory = useStore(state => state.setCurrentStory);
    const setPage = useStore(state => state.setPage);

    if (localStorage.getItem("currentStoryid")) {
        let currentStoryid = localStorage.getItem('currentStoryid');
        setData("/" + currentStoryid  + "/available", true);
        localStorage.removeItem("currentStoryid")
    }

    

    let count = 0;
    return (
        <div>
            <h2 className="pageTitle" id="available-page">Available Stories</h2>
            {availableStories.map((story) => {
                count += 1;
                return (
                    <div key={count} onClick={() => { setCurrentStory(story); setPage("contribute"); }
                    } className="story">
                        <div className="top-row">
                            <h3 className="title">{story.title}</h3>
                            <p className={`tag ${story.genre}`}>{story.genre}</p>
                        </div>
                        <p className="text">{story.text.length > 200 ? `${story.text.substring(0, 200)}...` : story.text}</p>
                        <p className="contributors">{`${story.num_contributors}/${story.max_contributors} Story Parts Complete`}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Available;
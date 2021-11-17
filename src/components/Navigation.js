import './Navigation.css';
import useStore from '../Store';
import { setData } from "../utilities/firebase";

const Navigation = () => {
    const setPage = useStore(state => state.setPage);
    const page = useStore(state => state.page);
    const currentStory = useStore(state => state.currentStory);
    const setCurrentStory = useStore(state => state.setCurrentStory);

    return (
        <div className="navigation">
            <button onClick = {() => {
                setPage("available");
                if (currentStory.id !== undefined) {
                    setData("/" + currentStory.id + "/available", true);
                }
                setCurrentStory({});
            }}
                id="available-btn"
                style={{
                    fontWeight: page === "available" ? "bold" : "normal",
                    backgroundColor: page === "available" ? "rgb(200, 200, 200)" : "rgb(230, 230, 230)"
                    }}>
                Available Stories
            </button>
            <button onClick = {() => {
                setPage("completed");
                if (currentStory.id !== undefined) {
                    setData("/" + currentStory.id + "/available", true);
                }
                setCurrentStory({});
            }}
                id="completed-btn"
                style={{
                    fontWeight: page === "completed" ? "bold" : "normal",
                    backgroundColor: page === "completed" ? "rgb(200, 200, 200)" : "rgb(230, 230, 230)"
                    }}>
                Completed Stories
            </button>
            <button onClick = {() => {
                setPage("create");
                if (currentStory.id !== undefined) {
                    setData("/" + currentStory.id + "/available", true);
                }
                setCurrentStory({});
            }}
                id="create-btn"
                style={{
                    fontWeight: page === "create" ? "bold" : "normal",
                    backgroundColor: page === "create" ? "rgb(200, 200, 200)" : "rgb(230, 230, 230)"
                    }}>
                Create Your Own
            </button>
        </div>
    )
}
export default Navigation
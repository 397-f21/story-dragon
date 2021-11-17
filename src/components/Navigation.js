import './Navigation.css';
import useStore from '../Store';
import { setData } from "../utilities/firebase";

const Navigation = () => {
    const setPage = useStore(state => state.setPage);
    const currentStory = useStore(state => state.currentStory);
    const setCurrentStory = useStore(state => state.setCurrentStory);

    return (
        <div className="navigation">
            <button onClick={() => {
                setPage("available");
                if (currentStory.id !== undefined) {
                    setData("/" + currentStory.id + "/available", true);
                }
                setCurrentStory({});
            }}>
                Available Stories
            </button>
            <button onClick={() => {
                setPage("completed");
                if (currentStory.id !== undefined) {
                    setData("/" + currentStory.id + "/available", true);
                }
                setCurrentStory({});
            }}>
                Completed Stories
            </button>
            <button onClick={() => setPage("create")}>
                Create Your Own
            </button>
        </div>
    )
}
export default Navigation
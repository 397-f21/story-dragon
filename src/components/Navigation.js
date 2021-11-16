import './Navigation.css';
import useStore from '../Store';

const Navigation = () => {
    const setPage = useStore(state => state.setPage);

    return (
        <div className="navigation">
            <button onClick = {() => setPage("available")}>
                Available Stories
            </button>
            <button onClick = {() => setPage("completed")}>
                Completed Stories
            </button>
            <button onClick = {() => setPage("create")}>
                Create Your Own
            </button>
        </div>
    )
}
export default Navigation
import './Navigation.css';

const Navigation = ({page, setPage}) => {
    return (
        <div className="navigation">
            <button id="available-btn" onClick = {() => setPage("available")}>
                Available Stories
            </button>
            <button id="completed-btn" onClick = {() => setPage("completed")}>
                Completed Stories
            </button>
            <button id="create-btn" onClick = {() => setPage("create")}>
                Create Your Own
            </button>
        </div>
    )
}
export default Navigation
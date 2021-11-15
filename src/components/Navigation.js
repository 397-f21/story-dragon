import './Navigation.css';

const Navigation = ({page, setPage}) => {
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
import './Navigation.css';

const Navigation = ({page, setPage}) => {

    return (
        <div className="navigation">
            <button onClick = {() => setPage("available")}
                style={{
                    fontWeight: page === "available" ? "bold" : "normal",
                    backgroundColor: page === "available" ? "rgb(200, 200, 200)" : "rgb(230, 230, 230)"
                    }}>
                Available Stories
            </button>
            <button onClick = {() => setPage("completed")}
                style={{
                    fontWeight: page === "completed" ? "bold" : "normal",
                    backgroundColor: page === "completed" ? "rgb(200, 200, 200)" : "rgb(230, 230, 230)"
                    }}>
                Completed Stories
            </button>
            <button onClick = {() => setPage("create")}
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
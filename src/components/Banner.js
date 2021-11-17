import './Banner.css';
import useStore from "../Store";
import React from "react";

const Banner = () => {
    const setPage = useStore(state => state.setPage);
    return (
        <a href="/" className="banner" onClick={()=> {setPage("available")}}>Story Dragon</a>
    )
}
export default Banner
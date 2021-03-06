import './Banner.css';
import logo from "../assets/logo.png";
import useStore from "../Store";
import React from "react";

const Banner = () => {
    const setPage = useStore(state => state.setPage);
    return (
        <>
            <div className="banner">
                <img className="logo"
                    src={logo}
                    alt="logo"
                />
                <a href="/" className="banner-text" onClick={()=>setPage("avaliable")}>Story Dragon</a>
            </div>
        </>
    )
}
export default Banner
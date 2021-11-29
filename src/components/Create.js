import React from "react";
import "./Create.css"
import { useState } from "react";
import { setData } from "../utilities/firebase";
import useStore from "../Store";


const Create = () => {
    const [title, setTitle] = useState(null);
    const [name, setName] = useState(null);
    const [num_contributors, setNum_contributors] = useState(2);
    const [genre, setGenre] = useState("Historical Fiction");
    const [text, setText] = useState(null);
    const setPage = useStore(state => state.setPage);
    const allStories = useStore(state => state.allStories);

    const genres = ["Historical Fiction", "Mystery", "Romance", "Science Fiction", "Young Adult", "Action and Adventure", "Fantasy", 
        "Horror", "Thriller", "Poetry", "Children", "Drama"];

    return (
        <div>
            <table className="create" >
                <tr>
                    <td className="td-1">Genre: </td>
                    <td className="td-2">
                        <select className="genre" name="genre" id="genre" onChange={e => {
                            setGenre(e.target.value);
                        }}>
                            {genres.map((gen) => {
                                return (
                                    <option key={gen} value={gen}>{gen}</option>
                                )
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="td-1">Total Number of Contributors:</td>
                    <td className="td-2">
                        <select className="num_contributors" name="num_contributors" id="num_contributors" onChange={e => {
                            setNum_contributors(e.target.value);
                        }}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td className="td-1">Story Title:</td>
                    <td className="td-2">
                        <div className="title">
                            <textarea
                                type="title"
                                id="title"
                                onChange={e => {
                                    var maintitle;
                                    maintitle = e.target.value;
                                    setTitle(maintitle);
                                }}>
                            </textarea>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="td-1">Story Text:</td>
                    <td className="td-2">
                        <div className="article">
                            <textarea
                                type="text"
                                id="text"
                                onChange={e => {
                                    var maintext;
                                    maintext = e.target.value;
                                    setText(maintext);
                                }}>
                            </textarea>
                            <br></br>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="td-1">Your Name:</td>
                    <td className="td-2">
                        <div className="name">
                            <textarea
                                type="name"
                                id="name"
                                onChange={e => {
                                    setName(e.target.value);
                                }}>
                            </textarea>
                        </div>
                    </td>
                </tr>
            </table >

            <div className="btn">
                <button onClick={() => {
                    setPage("available");
                }}>Cancel</button>

                <button onClick={() => {
                    const id = allStories.length
                    setData("/" + id + "/text", text)
                    setData("/" + id + "/id", id)
                    setData("/" + id + "/genre", genre)
                    setData("/" + id + "/max_contributors", parseInt(num_contributors))
                    setData("/" + id + "/num_contributors", 1)
                    setData("/" + id + "/title", title)
                    setData("/" + id + "/available", true)
                    setData("/" + id + "/completed", false)
                    setData("/" + id + "/names/" + 0, name);
                    setPage("available");
                }}> Submit </button>
            </div>

            {/* <button onClick={() => setPage("available")}>Back</button> */}
        </div>
    )
};

export default Create;

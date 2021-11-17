import React from "react";
import Available from "./Available";
import "./Contribute.css"
import { useState } from "react";
import { setData } from "../utilities/firebase";

const Create = ({ setPage }) => {
    const [title, setTitle] = useState(null);
    const [num_contributors, setNum_contributors] = useState(2);
    const [genre, setGenre] = useState("Historical Fiction");
    const [text, setText] = useState(null);

    return (
        <div className="create" >
            <table>
                <tr>
                    <td>Genre: </td>
                    <td>
                        <select name="genre" id="genre" onChange={e => {
                            setGenre(e.target.value);
                        }}>
                            <option value="Historical Fiction">Historical Fiction</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Romance">Romance</option>
                            <option value="Science Fiction">Science Fiction</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Number of Contributors</td>
                    <td>
                        <select name="num_contributors" id="num_contributors" onChange={e => {
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
                    <td>title</td>
                    <td>
                        <div>
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
                    <td>article</td>
                    <td>
                        <div>
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
            </table>

            <div>
                <button onClick={() => {
                    setPage("available");
                }}>Cancel</button>

                <button onClick={() => {
                    console.log(genre, num_contributors, title, text)
                    setPage("available");
                }}> Submit </button>
            </div>

            {/* <button onClick={() => setPage("available")}>Back</button> */}
        </div>
    )
};

export default Create;
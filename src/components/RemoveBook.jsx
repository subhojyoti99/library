import { useState } from "react";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import './removebook.css'
import { computeHeadingLevel } from "@testing-library/react";

export function RemoveBook() {
    const [bookId, setBookId] = useState("");

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`api/${bookId}`);

        } catch (err) {
            console.error(err);
        }
    }
    return (<>
        <Sidebar />
        <div className="container-addbook">
            <h2>Remove a booK</h2>
            <h1>Right arrow: <i className="arrow right"></i></h1>
            <hr />
        </div>
        <div>
            <form>
                <input type="text" placeholder="Book Id"
                    value={bookId}
                    onChange={(e) => {
                        setBookId(e.target.value)
                    }}
                    required />
                <button onClick={handleDelete}>Remove Book</button>
            </form>
        </div>
    </>)
}
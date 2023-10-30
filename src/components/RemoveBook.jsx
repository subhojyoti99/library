import { useState } from "react";
import { Sidebar } from "./Sidebar";
import axios from '../utils/axios'; 
import './removebook.css'

export function RemoveBook() {
    const [bookId, setBookId] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault(); 
        try {
            const res = await axios.delete(`admin/library/book/` + bookId);
            console.log(res)
        } catch (err) {
            console.error(err);
        }
    }
    return (<>
        <Sidebar />
        <div className="container-addbook">
            <h2>Remove a booK</h2>
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
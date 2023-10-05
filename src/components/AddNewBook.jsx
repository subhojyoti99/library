import { useEffect, useState } from "react";
import axios from "axios";

import './addnewbook.css';
import { Sidebar } from "./Sidebar";
export function AddNewBook() {
    const [bookData, setBookData] = useState({
        'title': '',
        'author': ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post('api', bookData)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <Sidebar />
            <div className="container-addbook">
                <h2>Add a new booK</h2>
                <hr />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title"
                        value={bookData.title}
                        onChange={(e) =>
                            setBookData({ ...bookData, title: e.target.value })}
                        required />
                    <input type="text" name="author" placeholder="Author"
                        value={bookData.author}
                        onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
                        required />
                    <button type="submit" placeholder="Add" id="add-button">Add Book</button>
                </form>
            </div>
        </>)
}
import { useState } from "react";
import axios from "axios";

import './addnewbook.css';
import { Sidebar } from "./Sidebar";
export function AddNewBook() {
    const [bookData, setBookData] = useState({
    "isbn": "",
    "title": "",
    "authors": "",
    "publisher": "",
    "version": "",
    "total_copies": "",
    "available_copies":""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/admin/library/book', bookData,{
                'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
            });
            console.log("Response:", res.data);
        } catch (err) {
            console.error("Error:", err)
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
        <input type="text" name="ISBN" placeholder="ISBN" value={bookData.ISBN} onChange={handleChange} required />
        <input type="text" name="Title" placeholder="Title" value={bookData.Title} onChange={handleChange} required />
        <input type="text" name="Authors" placeholder="Authors" value={bookData.Authors} onChange={handleChange} required />
        <input type="text" name="Publisher" placeholder="Publisher" value={bookData.Publisher} onChange={handleChange} required />
        <input type="text" name="Version" placeholder="Version" value={bookData.Version} onChange={handleChange} required />
        <input type="number" name="TotalCopies" placeholder="Total Copies" value={bookData.TotalCopies} onChange={handleChange} required />
        <input type="number" name="AvailableCopies" placeholder="Available Copies" value={bookData.AvailableCopies} onChange={handleChange} required />
        <button type="submit">Add Book</button>
        </form>
            </div>
        </>)
}
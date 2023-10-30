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

    // function handleChange(e) {
    //     console.log('handleChange called');
    //     const { name, value } = e.target;
    //     setBookData({ ...bookData, [name]: value })
    //     console.log(bookData);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token') 
        try {
            const BOOKWithNumber = { 
                ...bookData, 
                total_copies: +bookData.total_copies,
                available_copies: +bookData.available_copies,
                };
            const res = await axios.post('http://localhost:8080/admin/library/book', BOOKWithNumber,{
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${token}`
                }
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
        <input type="text" name="ISBN" placeholder="ISBN" value={bookData.isbn} onChange={(e)=>setBookData({ ...bookData, isbn: e.target.value })} required />
        <input type="text" name="Title" placeholder="Title" value={bookData.title} onChange={(e)=>setBookData({ ...bookData, title: e.target.value })} required />
        <input type="text" name="Authors" placeholder="Authors" value={bookData.authors} onChange={(e)=>setBookData({ ...bookData, authors: e.target.value })} required />
        <input type="text" name="Publisher" placeholder="Publisher" value={bookData.publisher} onChange={(e)=>setBookData({ ...bookData, publisher: e.target.value })} required />
        <input type="text" name="Version" placeholder="Version" value={bookData.version} onChange={(e)=>setBookData({ ...bookData, version: e.target.value })} required />
        <input type="number" name="TotalCopies" placeholder="Total Copies" value={bookData.total_copies} onChange={(e)=>setBookData({ ...bookData, total_copies: e.target.value })} required />
        <input type="number" name="AvailableCopies" placeholder="Available Copies" value={bookData.available_copies} onChange={(e)=>setBookData({ ...bookData, available_copies: e.target.value })} required />
        <button type="submit">Add Book</button>
        </form>
            </div>
        </>)
}
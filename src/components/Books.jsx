import React, { useState, useEffect } from 'react'; 
// import '../Book/books.css'; 
import axios from '../utils/axios'; 
import { Sidebar } from '../components/Sidebar'; 
const Books = () => { 
    const [books, setBooks] = useState([]); 
    const borrow = { "request_type": "borrow", };

    useEffect(() => { 
        const fetchBooks = async () => { 
            try { 
                const response = await axios.get('/api/library/books'); 
                setBooks(response.data?.Books); 
                // setIsbn(books?.isbn) 
            } catch (error) { 
                console.error('Error fetching books:', error); 
            } 
        }; 
                fetchBooks(); 
            }, []); 
                const handleRequest = async (bookISBN) => { 
                    console.log("book", bookISBN) 
                    try { 
                        const response = await axios.post('http://localhost:8080/api/request/' + bookISBN, borrow); 
                        console.log("res", response); 
                    } catch (error) { 
                        console.error('Error fetching books:', error); 
                    } 
                }; 
                return ( 
                <> 
                <Sidebar /> 
                <div className="bookshelf"> 
                <h2>All Books</h2> 
                <hr /> 
                <ul className="book-container"> 
                    {books?.map((item) => ( 
                    <li key={item.isbn}> 
                        {item.isbn} {item.title} By {item.authors} 
                        <button type='submit' onClick={() => handleRequest(item.isbn)}>Request</button> 
                        <hr /> 
                    </li> )
                    )} 
                </ul> 
                </div> 
                </> 
                ); 
            }; 
export default Books;
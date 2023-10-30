import React, { useState, useEffect } from 'react'; 
import axios from '../utils/axios'; 
import { Sidebar } from '../components/Sidebar'; 
const MyRequests = () => { 
    const [requests, setRequests] = useState([]); 

    useEffect(() => { 
        const fetchRequests = async () => { 
            try { 
                const response = await axios.get('/api/requests'); 
                setRequests(response.data?.My_requests); 
                console.log(response?.data?.My_requests)
            } catch (error) { 
                console.error('Error fetching books:', error); 
            } 
        }; 
        fetchRequests(); 
            }, []); 
            
                return ( 
                <> 
                <Sidebar /> 
                <div className="bookshelf"> 
                <h2>My Requests</h2> 
                <hr /> 
                <ul className="book-container"> 
                {requests?.map((item) => ( 
                <li key={item.request_id}> 
                {item.book_isbn}
                
                <hr /> 
                </li> )
                )} 
                </ul> 
                </div> 
                </> 
                ); 
            }; 
export default MyRequests;
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios'; 
// import axios from 'axios';

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [requestId, setRequestId] = useState({
    "request_id":""
  });

  useEffect(() => {
    // Fetch all requests when the component mounts
    axios.get('http://localhost:8080/admin/library/book/requests')
      .then(response => {
        setRequests(response?.data?.all_requests);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAccept = (request_id) => {
    const reqId= +requestId
    console.log(reqId)
    axios.post(`http://localhost:8080/admin/library/book/issue/approve/`+ request_id, reqId)
      .then(response => {
        // Handle success
        console.log(`Request ${request_id} accepted.`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleReturn = (requestId) => {
    axios.put(`http://localhost:8080/admin/requests/return/${requestId}`)
      .then(response => {
        // Handle success
        console.log(`Request ${requestId} returned.`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>All Requests</h2>
      <ul>
        {requests?.map((request) => (
          <li key={request.id} onChange={(e)=> setRequestId(request.request_id)}>
            Request ID: {request.request_id} - Book: {request.book_isbn} - Requester: {request.reader_id}
            <button onClick={() => handleAccept(request.request_id)}>Accept</button>
            <button onClick={() => handleReturn(request.id)}>Return</button>
          </li>
        ))}
        {/* <ul className="book-container"> 
                    {/* {requests?.map((item) => ( 
                    <li key={item.isbn}> 
                        {item.requestId} {item.} By {item.authors} 
                        <button type='submit' onClick={() => handleRequest(item.isbn)}>Request</button> 
                        <hr /> 
                    </li> )
                    )}  */}
      </ul>
    </div>
  );
};

export default AdminRequests;

import { useState } from "react"; 
import axios from "axios"; 
import './addnewbook.css'; 
import { Sidebar } from "./Sidebar"; 
// import { useNavigate } from "react-router-dom"; 
export function AddNewLibrary() { 

    // const navigate = useNavigate(); 
    const [library, setLibrary] = useState({ "name": "", }); 
    const num = Number('2020'); 

    // function handleChange(e) { 
        // const { name, value } = e.target; 
        // setUser({ ...user, [name]: value }) 
        // } 
        const handleSubmit = async (e) => { 
            const token = localStorage.getItem('token') 
            console.log("-werty---", token) 
            console.log("----", library) 
            e.preventDefault(); 
            try {
                const res = await axios.post('http://localhost:8080/owner/library', library, { 
                    headers: { 
                        'Content-Type': 'application/json', 
                        'Authorization': `Bearer ${token}`
                    } 
                }); 
                console.log("res", res.data) 
                // navigate('/auth/login') 
            } 
                catch (err) { 
                    console.log(num); 
                    console.error("Error:", err) 
                } 
            } 
            return ( 
            <> 
            <Sidebar /> 
            <div className="container-addbook"> 
            <h2>Library</h2> 
            <hr /> 
            </div> 
            <div> 
                <form> 
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Library Name" 
                    value={library.name} 
                    onChange={(e) => setLibrary({ ...library, name: e.target.value })}
                     /> 
                    <button type="button" onClick={handleSubmit} placeholder="Submit" id="add-button">Submit</button> 
                    </form> 
                    </div> 
                    </> 
                    ) 
                }
                

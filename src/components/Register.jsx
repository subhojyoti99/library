import React, { useState } from "react"; 
import axios from "axios"; 
import { Sidebar } from "./Sidebar"; 
import { useNavigate } from "react-router-dom";
export function Register() { 
    const navigate=useNavigate()
    const [user, setUser] = useState({ 
        name: "", 
        email: "", 
        contact_number: "", 
        password: "", 
        role: "", 
        lib_id: null, 
        valid_key: "Hello World", 
    }); 
    function handleChange(e) { 
        const { name, value } = e.target; 
        setUser({ ...user, [name]: value }); 
    }
    const handleSubmit = async () => { 
        try { 
            const userWithNumberLibId = { 
                ...user, lib_id: +user.lib_id, 
            }; 
            const res = await axios.post( "http://localhost:8080/auth/user/register", userWithNumberLibId, { 
                headers: { "Content-Type": "application/json", }, 
            } 
            ); 
            console.log("-----", userWithNumberLibId); 
            console.log("___", res); 
            navigate("/auth/login")
        } catch (err) { 
            console.error("___", err); 
        } 
    }; 
    return ( 
    <> 
    <Sidebar /> 
    <div className="container-addbook"> 
    <h2>Registration</h2> 
    <hr /> 
    </div> 
    <div> 
        <form>
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={user.name} 
            onChange={handleChange} 
            required 
            /> 
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={user.email} 
            onChange={handleChange} 
            required 
            /> 
            <input type="text" name="contact_number" placeholder="Contact Number" value={user.contact_number} onChange={handleChange} required /> 
            <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required /> 
            <input type="text" name="role" placeholder="Role" value={user.role} onChange={handleChange} required /> 
            <input type="number" name="lib_id" placeholder="Library ID" value={user.lib_id || ""} onChange={handleChange} required /> 
            <input type="password" name="valid_key" placeholder="Valid key" value={user.valid_key} onChange={handleChange} required /> 
            <button type="button" onClick={handleSubmit} id="add-button"> Submit </button> 
            </form>
            </div>
            </>
    
            );
        }





// import { useState } from "react";
// import axios from "axios";
// import './addnewbook.css';
// import { Sidebar } from "./Sidebar";
// export function Register() { 
//     const [user, setUser] = useState({ 
//         "name": "",
//         "email": "",
//         "password": "",
//         "contact_number": "",
//         "role": "",
//         "valid_key": "Hello_World",
//         "lib_id": ""
//     });
    
//     // function handleChange(e) { 
//     //     const { name, value } = e.target; 
//     //     setUser({ ...user, [name]: value }) 
//     // } 

//     const handleSubmit = async (e) => { 
//         console.log(user);
//         e.preventDefault();
//         try { 
//             const res = await axios.post('http://localhost:8080/auth/user/register', user, { 
//                 headers: { 
//                     'Content-Type': 'application/json', 
//                 } 
//             });
//             console.log("res", res.data)
//             // Reset the form after successful registration
//       setUser({
//         'name': '',
//         'email': '',
//         'contact_number': '',
//         'password': '',
//         'role': '',
//         'lib_id': '',
//         'valid_key': 'Hello World'
//       });
//         } catch (err) { 
//             console.error("Error:", err) 
//         } 
//     } 
//     return ( 
//     <> 
//     <Sidebar /> 
//     <div className="container-addbook"> 
//     <h2>Registration</h2> 
//     <hr />
//     </div> 
//     <div> 
//         <form> 
//             <input type="text" name="name" placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required /> 
//             <input type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required /> 
//             <input type="text" name="contact_number" placeholder="Contact Number" value={user.contact_number} onChange={(e) => setUser({ ...user, contact_number: e.target.value })} required /> 
//             <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required /> 
//             <input type="text" name="role" placeholder="Role" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} required /> 
//             <input type="password" name="valid_key" placeholder="Valid key" value={user.valid_key} onChange={(e) => setUser({ ...user, valid_key: e.target.value })} required /> 
//             <input type="text" name="lib_id" placeholder="Library Id" value={user.lib_id} onChange={(e) => setUser({ ...user, lib_id: e.target.value })}what /> 
//             <button type="button" onClick={handleSubmit} placeholder="Submit" id="add-button">Submit</button> </form> 
//             </div> 
//             </>
//             ) 
// }
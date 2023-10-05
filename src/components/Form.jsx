import React, { useState, useEffect } from "react";
import axios from "axios";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!name) {
            errors.name = "Name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        // Make an API request to submit the form data
        const response = await axios.post("/api/submit-form", {
            name,
            email,
        });

        if (response.status === 200) {
            // Success!
        } else {
            // Error!
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;

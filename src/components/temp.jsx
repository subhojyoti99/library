import React, { useState } from 'react';

import axios from 'axios';



function AddBookForm() {

    const [bookData, setBookData] = useState({

        title: '',

        author: '',

        // Add other book properties here

    });



    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setBookData({ ...bookData, [name]: value });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await axios.post('/api/books', bookData);

            // Handle success, display a success message, or update UI as needed

        } catch (error) {

            // Handle error, display error message to the user

        }

    };



    return (

        <div>

            <h2>Add a New Book</h2>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    name="title"

                    placeholder="Title"

                    value={bookData.title}

                    onChange={handleInputChange}

                    required

                />

                <input

                    type="text"

                    name="author"

                    placeholder="Author"

                    value={bookData.author}

                    onChange={handleInputChange}

                    required

                />

                {/* Add input fields for other book properties */}

                <button type="submit">Add Book</button>

            </form>

        </div>

    );

}



export default AddBookForm;
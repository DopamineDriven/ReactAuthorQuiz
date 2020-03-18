import React from 'react';
import './AddAuthorForm.css';

// adding form for users to add new authors/books/author image url to application
// match is a prop supplied by router
// htmlFor prop in label JSX
const AddAuthorForm = ({match}) => {
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
            <form>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input></input>
                </div>
            </form>
    </div>
}

export default AddAuthorForm;
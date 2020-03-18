import React, { Component } from 'react';
import './AddAuthorForm.css';
import './bootstrap.min.css'

// -----------------CONSTRUCTOR--------------------------------
class AuthorForm extends Component {
    constructor (props) {
        // default component state defined
        super(props)
        this.state = {
            name: '',
            imageURL: ''
        }
        // -----------------BINDING--------------------------------
        // since onFieldChange and handleSubmit methods use this., 
        // data-binding event in constructor required
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // -----------------METHODS--------------------------------

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddAuthor(this.state)
    }

    // use onFieldChange to modify default component state
    onFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })    
    }
        // -----------------RENDER--------------------------------
    // use value to bind inputs (name, imageURL)
    render() {
    return <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm__input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
            <label htmlFor="imageURL">Image URL</label>
            <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.onFieldChange} />
        </div>
        <input type="submit" value="Add" />
    </form>
    }
}


// adding form for users to add new authors/books/author image url to application
// match is a prop supplied by router
// htmlFor prop in label JSX
const AddAuthorForm = ({match, onAddAuthor}) => {
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>
}

export default AddAuthorForm;
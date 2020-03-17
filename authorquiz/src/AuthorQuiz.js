import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.min.css'

const Hero = () => {
  // offset-1 = offset from left by 1 column
  return (
  <div className = "row">
    <div className = "jumbotron col-10 offset-1">
    <h1>Author Quiz</h1>
    <p>Select the book written by the author shown</p>
    </div>
  </div>)
}

const Turn = () => {
  return (
    <div></div>
  )
}

const Continue = () => {
  return (
    <div></div>
  )
}

class AuthorQuiz extends Component {
  render() {
    // container-fluid specifies fluid layout for application
    // Hero component for Header
    // Turn component for the central game mechanics
    // Continue component for button that moves user along 
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
      </div>
    )
  }
}

export default AuthorQuiz;

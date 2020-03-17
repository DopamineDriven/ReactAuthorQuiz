import React, { Component} from 'react';
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

const Book = ({ title }) => {
  return (
    <div className="answer">
      <h4>{ title }</h4>
    </div>
  )
}

// need author prop and books prop
// anytime you render a collection of components via map
// must provide a key prop with a unique identifier so that
// react can distinguish individual elements
const Turn = ({ author, books, highlight }) => {

  const highlightToBgColor = (highlight) => {
    const mapping = {
      'none': '',
      'correct': 'green',
      'incorrect': 'red'
    }
    return mapping[highlight]
  }
  // change background color to green || red depending on whether
  // user selects correct || incorrect answer, respectively 
  return (
    <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} />)}
      </div>
    </div>
  )
}

const Continue = () => {
  return (
    <div></div>
  )
}

const Footer = () => {
  return (
    <div id="footer" className="row">
      <div className="co-12">
        <p className="text-muted credit">
        All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
          </p>
      </div>
    </div>
  )
}

const AuthorQuiz = ({ turnData, highlight }) => {
  // container-fluid specifies fluid layout for application
  // Hero component for Header
  // Turn component for the central game mechanics
  // Continue component for button that moves user along 
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} />
      <Continue />
      <Footer />
    </div>
  )
}

export default AuthorQuiz;

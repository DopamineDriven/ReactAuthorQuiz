import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz.js';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() }); 

// dummy app data in state
const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight: 'none'
}

// provide state via spread syntax
describe("Author Quiz", () => {
  it("render without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() =>{}} />, div)
  })
});

// use enzyme npm in conjunction with Jest
// npm i --save-dev enzyme enzyme-adapter-react-16
// use { shallow } helper to perform shallow rendering of react components
// https://www.npmjs.com/package/enzyme-adapter-react-16
// https://npmjs.com/package/enzyme
// developed by Airbnb
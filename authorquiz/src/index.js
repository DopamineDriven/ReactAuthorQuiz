import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn']
    },
    {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
    },
    {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone']
    },
    {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
    },
    {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
  ];

// ------------ getTurnData OVERVIEW ------------
// function selects set of possible answers 
// join together list off books written by all authors in dataset
// then shuffle them in a random order with underscore npm 
// https://www.npmjs.com/package/underscore
// then choosing the first four

// build collection by reducing author collections and
// concatenating each author's books into the larger set
const getTurnData = (authors) => {
    const allBooks = authors.reduce((p, c, i) => {
        return p.concat(c.books)
    }, []);
    
    // value fourRandomBooks equals shuffle all books
    // use slice method to extract first four books returned
    const fourRandomBooks = shuffle(allBooks).slice(0,4)
    
    // choose correct answer from fourRandomBooks
    // use sample function to choose a random value
    const answer = sample(fourRandomBooks)

    // return authors via find method of authors array
    // to find author such that authors book collection contains
    // a books title is equal to the answer chosen
    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) => 
                title === answer ))
    }
};


// props received by Turn will be author and books
const state = {
    turnData: getTurnData(authors),
    highlight: ''
};

// Determine if answer is correct or incorrect
// to assess, must inspect turnData books collection
async function onAnswerSelected(answer) {
    // find book in collection such that title = answer user selected
    // this is done via isCorrect
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    // ternary operation
    state.highlight = isCorrect ? 'correct' : 'incorrect';
    // update application with new state via render function
    render();
}

// render function called when script executed and also after app state is updated
// so that state change flows through UI
const render = () => {
    // use spread operator syntax to expand state object out into its properties
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
};
render();
serviceWorker.unregister();
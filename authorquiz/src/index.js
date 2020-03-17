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
    turnData: getTurnData(authors)
};

// use spread operator syntax to expand state object out into its properties
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
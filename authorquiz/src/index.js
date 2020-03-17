import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: "../public/images/authors/marktwain.jpg",
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    }
]

// props received by Turn will be author and books
const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
}

// use spread operator syntax to expand state object out into its properties
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

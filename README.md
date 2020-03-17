# ReactAuthorQuiz

# Technical Overview

## underscore
https://npmjs.com/package/underscore
- npm i underscore
- $>$7 million weekly downloads
- JavaScript utility-belt library
- supports functional suspects such as
  - each
  - map
  - reduce
  - filter
- all without extending core JavaScript objects
### AuthorQuiz.js

 {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}


### index.js

import { shuffle, sample } from 'underscore';

const getTurnData = (authors) => {
const allBooks = authors.reduce((p, c, i) => {
    return p.concat(c.books)
}, []);

const fourRandomBooks = shuffle(allBooks).slice(0,4)

const answer = sample(fourRandomBooks)

- getTurnData selects set of possible authors 
- concatenates books by each author into larger set
- shuffle randomizes books drawn, slice ensures the top four are drawn

## enzyme & enzyme-adapter-react-16

https://npmjs.com/package/enzyme
https://npmjs.com/package/enzyme-adapter-react-16

- npm i --save-dev enzyme enzyme-adapter-react-16
- runtime type checking for React props and similar objects
- use enzyme npm in conjunction with Jest
- use { shallow } helper to perform shallow rendering of components
- created by Airbnb developers

## prop-types
https://www.npmjs.com/package/prop-types
- npm i --save prop-types
- document intended types of properties passed to components
- react checks props passed to components against those definitions
- warns development if they don't match


# Quiz

## When answering questions

If answered correctly, game background color -> green
If answered incorrectly, game background color -> red

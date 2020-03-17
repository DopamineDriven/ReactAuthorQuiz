import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz.js';

describe("Author Quiz", () => {
  it("render without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz />, div)
  })
});

// use enzyme npm in conjunction with Jest
// npm i --save-dev enzyme enzyme-adapter-react-16
// use { shallow } helper to perform shallow rendering of react components
// https://npmjs.com/package/enzyme
// developed by Airbnb
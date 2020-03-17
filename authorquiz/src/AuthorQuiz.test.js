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

  // use enzyme mount function to render an Author
  describe("When no answer has been selected", () =>{
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} 
        onAnswerSelected={() => {}} />)
    });
    it("should have unchanged background color", () => {
      // using wrapper component was rendered into, use .find()
      // use css selectors
      // expect empty or lack of background color to be true 
      expect(wrapper.find("div.row.turn").props()
      .style.backgroundColor).toBe("")
    })
  });

  // incorrect answer selected
  describe('When the incorrect answer is selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, 
          {highlight: 'incorrect'}))}
          onAnswerSelected={()=>{}} />
      )
    });
    // expect red background color
    it('should have a red background color', () => {
      expect(wrapper.find('div.row.turn').props()
      .style.backgroundColor).toBe("red")
    })
  });

  // correct answer selected
  describe('When the correct answer is selected', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...(Object.assign({}, state, 
          {highlight: 'correct'}))}
          onAnswerSelected={()=>{}} />
      )
    });
    // expect green background color
    it('should have a green background color', () => {
      expect(wrapper.find('div.row.turn').props()
      .style.backgroundColor).toBe("green")
    })
  });

  // when first answer [0] is selected
  describe('When the first answer is selected', () => {
    let wrapper;
    // use jest.fn()
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...state} 
        onAnswerSelected={handleAnswerSelected}/>)
      // finding answer and simulating click on position [0]
      wrapper.find('.answer').first().simulate('click');
    });

    it('onAnswerSelected should be called', () => {
      expect(handleAnswerSelected).toHaveBeenCalled()
    });
    
    it('Should return The Shining via click simulation', () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining")
    })
  })
});

// use enzyme npm in conjunction with Jest
// npm i --save-dev enzyme enzyme-adapter-react-16
// use { shallow } helper to perform shallow rendering of react components
// https://www.npmjs.com/package/enzyme-adapter-react-16
// https://npmjs.com/package/enzyme
// developed by Airbnb
import './App.css';
import React from 'react';
import FlashcardList from './components/FlashcardList';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Hiragana</h1>
        <h3>Practice your Hiragana character knowlegde with these JLPT Flashcards!</h3>
        <h4>Number of cards: 0</h4>
      </div>
      <FlashcardList />
    </div>
  )
}

export default App
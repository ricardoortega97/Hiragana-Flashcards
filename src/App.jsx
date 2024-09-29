import './App.css';
import React from 'react';
import FlashcardList from './components/FlashcardList';
import flashcards from './data/hiragandata';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Hiragana</h1>
        <h3>Practice your Hiragana Characters: Single and Composite characters</h3>
        <h4>Number of cards: {flashcards.length}</h4>
      </div>
      <FlashcardList />
    </div>
  )
}

export default App
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Hiragana</h1>
        <h3>Practice your Hiragana character knowlegde with these JLPT Flashcards!</h3>
        <h4>Number of cards: 0</h4>
      </div>
      <div className='card'>
        <div className='front'>
          front lets see how much will it work when you add informatio
          in it!sdkfnsdsnkgsnsgsngskngsdkngskn the problem is that it will expand unless
          it adjust itself on the card center ohhhh it is working interesting I wondwe how much information will it take till it blows up 
        </div>
        <div className='back'>
          back
        </div>
      </div>
      <button type='next' className='next-card'>⭢</button>
    </div>
  )
}

export default App
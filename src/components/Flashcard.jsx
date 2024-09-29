import React from "react";
import { useState } from "react";

const Flashcards = ({id, character, word}) => {

      //EventHandler: Back button 
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

    return(
        <div className={`card ${isFlipped ? 'flipped' : ''} ${id}`} onClick={handleClick}>
        <div className='front'>
          <h3>{character}</h3>
        </div>
        <div className='back'>
            <p>{word}</p>
        </div>
      </div>
    )
}

export default Flashcards;
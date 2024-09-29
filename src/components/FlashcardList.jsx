import React, { useState } from "react";
import Flashcards from "./Flashcard";
import flashcards from "../data/hiragandata";

const FlashcardList = () => {

    const [currentCard, setCurrentCard] = useState(0)
    const [history, setHistory] = useState([0])
    const [historyIndex, setHistoryIndex] = useState(0)

    const handleNext = () => {
        const randIndex = Math.floor(Math.random() * flashcards.length);
        
        if (historyIndex == history.length -1) {
            let randIndex;
            do {
                randIndex = Math.floor(Math.random() * flashcards.length);

            } while (randIndex == currentCard);
            setHistory([...history, randIndex]);
            setHistoryIndex(historyIndex + 1);
            setCurrentCard(randIndex);
        } else {
            setHistoryIndex(historyIndex + 1);
            setCurrentCard(history[historyIndex + 1]);
        }
    }
    
    const handlePrev = () => {
        if (historyIndex > 0){
            setHistoryIndex(historyIndex -1);
            setCurrentCard(history[historyIndex -1 ]);
        }
    }

    return (
        <div>
            <Flashcards 
                id={flashcards[currentCard].id}
                character={flashcards[currentCard].character}
                word={flashcards[currentCard].word}
                />
            <button onClick={handlePrev} disabled={historyIndex === 0}>Previous</button>
            <button onClick={handleNext} >Next</button>
        </div>
    )
}
export default FlashcardList;
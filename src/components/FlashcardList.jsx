import React, { useState } from "react";
import Flashcards from "./Flashcard";

const FlashcardList = () => {

    const flashcards = [
        { id: "card1", character: "あ", word: "a (あ)" },
        { id: "card2", character: "い", word: "i (い)" },
        { id: "card3", character: "う", word: "u (う)" },
        { id: "card4", character: "え", word: "e (え)" },
        { id: "card5", character: "お", word: "o (お)" },
    ];
    
    const [currentCard, setCurrentCard] = useState(0)
    const [history, setHistory] = useState([0])
    const [historyIndex, setHistoryIndex] = useState(0)

    const handleNext = () => {
        const randIndex = Math.floor(Math.random() * flashcards.length);
        
        if (historyIndex == history.length -1) {
            setHistory([...history, randIndex]);
        } else {
            const updateHistory = [...history.slice(0, historyIndex + 1), randIndex];
            setHistory(updateHistory)
        }

        setHistoryIndex(historyIndex + 1);
        setCurrentCard(randIndex);
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
                character={flashcards[currentCard].character}
                word={flashcards[currentCard].word}
                />
            <button onClick={handlePrev} disabled={historyIndex === 0}>Previous</button>
            <button onClick={handleNext} >Next</button>
        </div>
    )
}
export default FlashcardList;
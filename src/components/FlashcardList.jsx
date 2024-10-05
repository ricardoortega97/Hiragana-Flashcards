import React, { useState } from "react";
import Flashcards from "./Flashcard";
import flashcards from "../data/hiragandata";
import FlashcardChoices from "./flashcardChoice";

const FlashcardList = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [history, setHistory] = useState([0]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [checkedCharacter, setCheckedCharacter] = useState("");
    const [input, setInput] = useState({
        character: "",
    });
    const [counter,setCounter] = useState(0)
    const [streak, setStreak] = useState(0)

    // Get the current character and word
    const currentCharacter = flashcards[currentCard].character;
    const trueWord = flashcards[currentCard].word;

    const onCheckedAnswer = () => {
        const correctAnswer = flashcards[currentCard].word.split(" ")[0].trim(); 
    
        const inputWord = input.character.trim();
    
        if (!inputWord) {
            alert("Please enter a character.");
            return;
        }
    
        if (correctAnswer === inputWord) {
            setCheckedCharacter("correct");
            setCounter(prevCounter => {
                const newCounter = prevCounter + 1;
                
                if (newCounter > streak) {
                    setStreak(newCounter)
                }
                return newCounter
            });
        } else {
            setCheckedCharacter("wrong");
            setCounter(0)
        }
    };
    const handleNext = () => {
        if (historyIndex === history.length - 1) {
            let randIndex;
            do {
                randIndex = Math.floor(Math.random() * flashcards.length);
            } while (randIndex === currentCard);
            setHistory([...history, randIndex]);
            setHistoryIndex(historyIndex + 1);
            setCurrentCard(randIndex);
        } else {
            setHistoryIndex(historyIndex + 1);
            setCurrentCard(history[historyIndex + 1]);
        }
        setCheckedCharacter(""); 
        setInput({ character: "" }); 
    };

    const handlePrev = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setCurrentCard(history[historyIndex - 1]);
        }
    };

    return (
        <div>
            <h4>Current Streak: {counter}, Streak: {streak}</h4>
            <Flashcards 
                id={flashcards[currentCard].id}
                character={currentCharacter} 
                word={trueWord} 
            />
            <h3>Current Streak: </h3>
            <div className="answer-space" id={checkedCharacter}>
                {input.character} 
            </div>
            <FlashcardChoices 
                handleChange={(e) => 
                    setInput((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value, 
                    }))
                }
                label="character" 
                choices={[flashcards[currentCard].character]} 
                currentVal={input.character} 
            />
            
            <button type="button" className="button submit" onClick={onCheckedAnswer}>
                Check answer 
            </button>
            <button onClick={handlePrev} disabled={historyIndex === 0}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default FlashcardList;

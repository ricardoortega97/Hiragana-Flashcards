import React from "react";

const FlashcardChoices = ({ handleChange, label, currentVal, checkedCharacter}) => {
    return (
        <div>
            <div className="input-container">
                <input 
                    type="text"
                    name={label} 
                    value={currentVal} 
                    placeholder="Guess the character..."
                    onChange={handleChange}
                    className="textbox"
                />
            </div>
        </div>
    );
};

export default FlashcardChoices;

# Web Development Project 3 - *Hiragana Flashcards 1.1.0*

Submitted by: **Ricardo Ortega Pacheco**

This web app: **Practing Hiragina single and composite characters. Only has a few set of characters and will be updated as more is added in the data.js file. The light blue background color indicates it is a single character as the creamy orange background color indicates it is a composite character. This is the updated version of the flashcards with a submit feature that provideds feedback if the answer is correct or not.**

Time spent: **9 + 3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**
- **New**
- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category (Light Blue for single characters, creamy orange for composite characters)
- [x] A counter displays the user's current and longest streak of correct responses

The following **additional** features are implemented:

* [x] Organized data management by storing flashcards in a separate file (hiraganaData.js)

## Video Walkthrough

Here's a walkthrough of implemented required features:

<h3>Version 1.0.0</h3>
<img src='https://imgur.com/59zMbfo.gif' title='flashcard gif' width='' alt='gif' />

<h3>Version 1.1.0</h3>
<img src='https://imgur.com/wDqi0JW.gif' title='flashcard gif v.1.1' width='' alt='gif' />

GIF created with LICEcap
## Notes

Challenges: 
- Implementing Math.random in the function to randomize the cards 
- Ensuring the next and previous buttons worked, as the previous work but when you click on the next button,
    it does not grab to correct card and picks another random card
- When you click on the previous button, the site crashes and leaves a blank screen with no ability to go to the
    next card
- **New**
- User input: Submit button was not providing a feedback as will indicating the corisponding color
- Input text was not active and could not enter any text, even when the text was added, the submit gave the same callback alert popup of invalid word

## License

    Copyright [2024] [Ricardo Ortega Pacheco]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
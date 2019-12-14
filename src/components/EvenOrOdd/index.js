import React, { useState } from 'react';

const EvenOrOdd = () => {
    const [currentChoice, setCurrentChoice] = useState('Even');
    const [number, setCurrentNumber] = useState('');
    const [result, setResult] = useState('');
    const [winStatus, setWinStatus] = ('');

    const pickNumber = () => {
        let numberChosen = Math.ceil(Math.random() * Math.floor(100));
        setCurrentNumber(numberChosen)
        return numberChosen;
    }

    const evaluateEvenOrOdd = (numberChosen) => {
        console.log(numberChosen, "<number")
        if (numberChosen % 2 === 0) {
            setResult('Even');
        } else {
            setResult('Odd');
        }
    }

    const evenOddSelect = () => {
        let numberChosen = pickNumber();
        // console.log(numberChosen, "<num chosen")
        evaluateEvenOrOdd(numberChosen);
    }

    return (
        <div>
            <h1>Even or Odd?</h1>
            Here's the deal: I'm going to pick a number between 1 and 100. Your job is to guess whether it'll be even or odd. Guess right and you win. Wrong and you lose.
            <hr/>

            <div>
                Make your selection:
                <div className={(currentChoice === 'Even') ? 'selected' : ''} onClick={e => setCurrentChoice('Even')}>Even</div>
                <div className={(currentChoice === 'Odd') ? 'selected' : ''} onClick={e => setCurrentChoice('Odd')}>Odd</div>
                <button onClick={e => evenOddSelect()}>Guess the number!</button>
            </div>
            <br/>
            <div>
                Number: {number}
                <br/>
                Even or Odd: {result}
            </div>
        </div>
    )
}

export default EvenOrOdd;
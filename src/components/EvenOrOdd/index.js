import React, { useState } from 'react';

const EvenOrOdd = () => {
    const [currentChoice, setCurrentChoice] = useState('Even');

    return (
        <div>
            <h1>Even or Odd?</h1>
            Here's the deal: I'm going to pick a number between 1 and 100. Your job is to guess whether it'll be even or odd. Guess right and you win. Wrong and you lose.
            <hr/>

            <div>
                Make your selection:
                <div className={(currentChoice === 'Even') ? 'selected' : ''} onClick={e => setCurrentChoice('Even')}>Even</div>
                <div className={(currentChoice === 'Odd') ? 'selected' : ''} onClick={e => setCurrentChoice('Odd')}>Odd</div>

            </div>
        </div>
    )
}

export default EvenOrOdd;
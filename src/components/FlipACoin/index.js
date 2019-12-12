import React, { useState } from 'react';

const FlipACoin = () => {
    const [currentChoice, setCurrentChoice] = useState('Heads');
    const [flipResult, setFlipResult] = useState('?');

    const coinDecision = () => {
        let sides = ['Heads', 'Tails'];
        let sideFlipped = sides[Math.floor(Math.random() * Math.floor(2))]
        console.log(sideFlipped,'<- in coin decision')
        setFlipResult(sideFlipped);
        return sideFlipped;
    }

    const flipTheCoin = () => {
        let flippedCoin = coinDecision();
        console.log(flippedCoin,'<- in flip the coin')

    }

    return (
        <div>
            <h1>Flip A Coin</h1>
            Every indecisive person knows that the best way to make a tough decision is to leave it to good old Heads or Tails.
            <hr/>
            <div>(Click choice to toggle.)</div>
            <div value='Heads' className={(currentChoice === 'Heads') ? 'selected' : ''} onClick={e => setCurrentChoice('Heads')}>Heads</div>
            <div value='Tails' className={(currentChoice === 'Tails') ? 'selected' : ''} onClick={e => setCurrentChoice('Tails')}>Tails</div>
            <button onClick={e => flipTheCoin()}>Flip the coin!</button>
            <h2>Flip results:</h2>
            Your choice is: {currentChoice}
            <br/>
            The result is: {flipResult}
        </div>
    )
}

export default FlipACoin;
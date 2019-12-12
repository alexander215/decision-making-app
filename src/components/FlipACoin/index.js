import React, { useState } from 'react';

const FlipACoin = () => {
    const [currentChoice, setCurrentChoice] = useState('Heads');
    const [flipResult, setFlipResult] = useState('?');
    const [decisionResult, setDecisionResult] = useState('');

    // This will decide the result of the coin flip: heads or tails
    const coinDecision = () => {
        let sides = ['Heads', 'Tails'];
        let sideFlipped = sides[Math.floor(Math.random() * Math.floor(2))]
        console.log(sideFlipped,'<- in coin decision')
        setFlipResult(sideFlipped);
        return sideFlipped;
    }

    const flipWinner = () => {
        // if 
    }

    const flipTheCoin = () => {
        let flippedCoin = coinDecision();
        console.log(flippedCoin,'<- in flip the coin')
        console.log(decisionResult,'<-decisionresult')
    }

    return (
        <div>
            <h1>Flip A Coin</h1>
            Every indecisive person knows that the best way to make a tough decision is to leave it to good old Heads or Tails.
            <br/>
            All you have to do is enter the decision you'd like, and choose whether it happens on heads or tails. Let fate do the rest.
            <hr/>
            <div>
                Your desired result. In other words, if the coin agrees, you will:
                <br/>
                <input type='text' name='decision' placeholder='Enter result' onChange={e => setDecisionResult(e.target.value)}></input>
            </div>

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
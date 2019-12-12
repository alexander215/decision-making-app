import React, { useState } from 'react';

const FlipACoin = () => {
    const [currentChoice, setCurrentChoice] = useState('Heads');
    const [flipResult, setFlipResult] = useState('?');
    const [preferredDecision, setPreferredDecision] = useState('');
    const [otherDecision, setOtherDecision] = useState('');
    const [resultStatus, setResultStatus] = useState('');

    // This will decide the result of the coin flip: heads or tails
    const coinDecision = () => {
        let sides = ['Heads', 'Tails'];
        let sideFlipped = sides[Math.floor(Math.random() * Math.floor(2))]
        console.log(sideFlipped,'<- in coin decision')
        setFlipResult(sideFlipped);
        return sideFlipped;
    }

    const flipWinner = (flipWinner) => {
        if (flipWinner === currentChoice) {
            setResultStatus(`Yes!!!! You should ${preferredDecision}.`)
        } else {
            setResultStatus(`No!!! You should ${otherDecision}`)
        }
    }

    const flipTheCoin = () => {
        if ((preferredDecision === '') || (otherDecision === '')) {
            setResultStatus('Please set the requirements.');
        } else {
            let flippedCoin = coinDecision();
            flipWinner(flippedCoin);
        }
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
                <input type='text' name='desired-decision' placeholder='Enter result' onChange={e => setPreferredDecision(e.target.value)}></input>
                <br/>
                The other result. If the coin doesn't agree, you will:
                <br/>
                <input type='text' name='other-decision' placeholder='Enter result' onChange={e => setOtherDecision(e.target.value)}></input>
            </div>

            <div>(Click choice to toggle.)</div>
            <div value='Heads' className={(currentChoice === 'Heads') ? 'selected' : ''} onClick={e => setCurrentChoice('Heads')}>Heads</div>
            <div value='Tails' className={(currentChoice === 'Tails') ? 'selected' : ''} onClick={e => setCurrentChoice('Tails')}>Tails</div>
            <button onClick={e => flipTheCoin()}>Flip the coin!</button>
            <h2>Flip results:</h2>
            Your choice is: {currentChoice}
            <br/>
            The result is: {flipResult}
            <br/>
            {resultStatus}
        </div>
    )
}

export default FlipACoin;
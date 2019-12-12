import React, { useState } from 'react';

const FlipACoin = () => {
    const [currentChoice, setCurrentChoice] = useState('Heads');
    const [flipResult, setFlipResult] = useState('?');

    return (
        <div>
            <h1>Flip A Coin</h1>
            Every indecisive person knows that the best way to make a tough decision is to leave it to good old Heads or Tails.
            <hr/>
            <div>(Click choice to toggle.)</div>
            <div value='Heads' className={(currentChoice === 'Heads') ? 'selected' : ''} onClick={e => setCurrentChoice('Heads')}>Heads</div>
            <div value='Tails' className={(currentChoice === 'Tails') ? 'selected' : ''} onClick={e => setCurrentChoice('Tails')}>Tails</div>
            <button>Flip the coin!</button>
        </div>
    )
}

export default FlipACoin;
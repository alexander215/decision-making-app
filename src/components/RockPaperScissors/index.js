import React, { useState } from 'react';

const RockPaperScissors = () => {
    const [currentChoice, setCurrentChoice] = useState('Rock');
    const [opponentChoice, setOpponentChoice] = useState('?');
    
    const playRockPaperScissors = () => {
        let choices = ['Rock', 'Paper', 'Scissors'];
        let opponentPlay = choices[Math.floor(Math.random() * Math.floor(3))];
        console.log(opponentPlay);
        setOpponentChoice(opponentPlay);

    };

    return (
        <div>
            <h1>Rock, Paper, Scissors</h1>
            The rules are as old as time, but unless you've been living under, well, paper:
            Rock breaks scissors, scissors cut paper, paper covers rock. It's a vicious circle.
            No one knows why a rock gives up when it's covered by a piece of paper, but that's neither here nor there.
            <hr/>
            <div value='Rock' className={(currentChoice === 'Rock') ? 'selected' : ''} onClick={e => setCurrentChoice('Rock')}>

                Rock.
            </div>
            <div value='Rock' className={(currentChoice === 'Paper') ? 'selected' : ''} onClick={e => setCurrentChoice('Paper')}>
                Paper.
            </div>
            <div value='Rock' className={(currentChoice === 'Scissors') ? 'selected' : ''} onClick={e => setCurrentChoice('Scissors')}>
                Scissors.
            </div>
            {/* <button type='submit' onClick={console.log('Clicked')}>Rock, Paper, Scissors!</button> */}
            <button onClick={e => playRockPaperScissors()}>Rock, Paper, Scissors!</button>

            <h2>The Results:</h2>
            Your choice is: {currentChoice}
            <br/>
            Your opponent's choice is: {opponentChoice}
            

        </div>
    )

}

export default RockPaperScissors;
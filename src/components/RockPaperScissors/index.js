import React, { useState } from 'react';
import { async } from 'q';

const RockPaperScissors = () => {
  const [currentChoice, setCurrentChoice] = useState('Rock');
  const [opponentChoice, setOpponentChoice] = useState('?');
  const [winnerStatus, setWinnerStatus] = useState('');
  
  // The win logic. It gets called from playRockPaperScissors().
  const calculateWinner = (opponentsDecision) => {
    if (currentChoice === opponentsDecision) {
      return setWinnerStatus(`${currentChoice} vs. ${opponentsDecision}: It's a tie!`);
    } else if ((currentChoice === 'Rock') && (opponentsDecision === 'Paper')) {
      return setWinnerStatus(`Uh oh, ${opponentsDecision} beats ${currentChoice}. You lose...`);
    } else if ((currentChoice === 'Paper') && (opponentsDecision === 'Scissors')) {
      return setWinnerStatus(`Uh oh, ${opponentsDecision} beats ${currentChoice}. You lose...`);
    } else if ((currentChoice === 'Scissors') && (opponentsDecision === 'Rock')) {
      return setWinnerStatus(`Uh oh, ${opponentsDecision} beats ${currentChoice}. You lose...`);
    } else {
      return setWinnerStatus(`Yippee! ${currentChoice} beats ${opponentsDecision}. You win!`);
    }
  }

  // This is the opponents choice. It gets called from playRockPaperScissors().
  const opponentDecision = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let opponentPlay = choices[Math.floor(Math.random() * Math.floor(3))];
    setOpponentChoice(opponentPlay);
    return opponentPlay;
  }
  
  // This is the game play. It gets activated when the play button is clicked.
  const playRockPaperScissors = (e) => {
    // e.preventDefault();
    let opponentsDecision = opponentDecision();
    setWinnerStatus("Calculating...");
    calculateWinner(opponentsDecision);
  };

  const choiceSelection = (choice) => {
    setCurrentChoice(choice)
  }

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      The rules are as old as time, but unless you've been living under, well, paper:
      Rock breaks scissors, scissors cut paper, and paper covers rock. It's a vicious circle.
      No one knows why a rock gives up when it's covered by a piece of paper, but that's neither here nor there.
      <hr/>
      <div>(Click choice to toggle)</div>
      <div value='Rock' className={(currentChoice === 'Rock') ? 'selected' : ''} onClick={e => choiceSelection('Rock')}>

        Rock.
      </div>
      <div value='Paper' className={(currentChoice === 'Paper') ? 'selected' : ''} onClick={e => choiceSelection('Paper')}>
        Paper.
      </div>
      <div value='Scissors' className={(currentChoice === 'Scissors') ? 'selected' : ''} onClick={e => choiceSelection('Scissors')}>
        Scissors.
      </div>
      <button onClick={e => playRockPaperScissors(e)}>Rock, Paper, Scissors!</button>

      <h2>The Results:</h2>
      Your choice is: {currentChoice}
      <br/>
      Your opponent's choice is: {opponentChoice}
      <br/>
      {winnerStatus}
        

    </div>
  )

}

export default RockPaperScissors;
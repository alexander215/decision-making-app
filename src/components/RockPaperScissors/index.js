import React, { useState } from 'react';
import { async } from 'q';
import RockPaperScissorsSelectContainer from './RockPaperScissorsSelectContainer';

const RockPaperScissors = () => {
  const [currentChoice, setCurrentChoice] = useState('Rock');
  const [opponentChoice, setOpponentChoice] = useState('?');
  const [winnerStatus, setWinnerStatus] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  
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
    setGameStarted(true)
    calculateWinner(opponentsDecision);
  };

  const choiceSelection = (choice) => {
    if (!gameStarted){
      setCurrentChoice(choice)
    }
  }

  // This toggles the button on the game message
  let gameButtonMessage = 'Rock, Paper, Scissors!'
  if (gameStarted) { gameButtonMessage = 'Play again.'}

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      The rules are as old as time, but unless you've been living under, well, paper:
      Rock breaks scissors, scissors cut paper, and paper covers rock. It's a vicious circle.
      No one knows why a rock gives up when it's covered by a piece of paper, but that's neither here nor there.
      <hr/>
      { (!gameStarted) ? 
        <RockPaperScissorsSelectContainer currentChoice={currentChoice} choiceSelection={(choice) => {choiceSelection(choice)}} />
        :
        null
      }
      <button onClick={e => playRockPaperScissors(e)}>{gameButtonMessage}</button>

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
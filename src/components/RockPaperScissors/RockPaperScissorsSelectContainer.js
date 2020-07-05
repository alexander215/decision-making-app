import React from 'react';

const RockPaperScissorsSelectContainer = (props) => {
  return (
    <div>
      <div>(Click choice to toggle)</div>
      <div value='Rock' className={(props.currentChoice === 'Rock') ? 'selected' : ''} onClick={() => props.choiceSelection('Rock')}>

        Rock.
      </div>
      <div value='Paper' className={(props.currentChoice === 'Paper') ? 'selected' : ''} onClick={() => props.choiceSelection('Paper')}>
        Paper.
      </div>
      <div value='Scissors' className={(props.currentChoice === 'Scissors') ? 'selected' : ''} onClick={() => props.choiceSelection('Scissors')}>
        Scissors.
      </div>
    </div>
  )
}

export default RockPaperScissorsSelectContainer;

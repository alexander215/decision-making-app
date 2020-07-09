import React from 'react';

const ResultsContainer = (props) => {
  return (
    <div>
      <h2>The Results:</h2>
      Your choice is: {props.currentChoice}
      <br/>
      Your opponent's choice is: {props.opponentChoice}
      <br/>
      {props.winnerStatus}
    </div>
  )
}

export default ResultsContainer;

import React, { useState } from 'react';

function RandomNumber() {
  const [random, setRandom] = useState(0);
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);
  

  const randomize = () => {
    if (minNumber >= maxNumber){
        return "That's cheating. The little number has to be smaller. Try again."
    } else {
        return Math.round((Math.random() * (maxNumber - minNumber) + minNumber));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = randomize();
    setRandom(randomNumber);

  };

  return(
    <div>
      <h1>Random Number Generator</h1>
      Pick a random number between <u>{minNumber}</u> and <u>{maxNumber}</u>.
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Minimum number: 
        </label>
        <input type='number' min='0' name='minNumber' value={minNumber} onChange={e => setMinNumber(parseInt(e.target.value))} />
          <br/>
        <label>
          Maximum number: 
        </label>
        <input type='number' min='0' name='maxNumber' value={maxNumber} onChange={e => setMaxNumber(parseInt(e.target.value))} />
        <br/>
        <button type='submit'>Randomize!!!</button>
      </form>
      <h2>Your random number is:</h2>
      <h3>{random}</h3>
    </div>
  )
};

export default RandomNumber;

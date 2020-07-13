import React from 'react';

const FlipCriteria = (props) => {
  return (
    <div>
      <div>
        Your desired result. In other words, if the coin agrees, you will:
        <br/>
        <input type='text' name='desired-decision' value={preferredDecision} placeholder='Enter result' onChange={e => setPreferredDecision(e.target.value)}></input>
        <br/>
        The other result. If the coin doesn't agree, you will:
        <br/>
        <input type='text' name='other-decision' value={otherDecision} placeholder='Enter other result' onChange={e => setOtherDecision(e.target.value)}></input>
        <br/>
      </div>
    </div>
  )
}

export default FlipCriteria;

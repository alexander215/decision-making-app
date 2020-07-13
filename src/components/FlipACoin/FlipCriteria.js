import React from 'react';

const FlipCriteria = (props) => {
  return (
    <div>
      <div>
        Your desired result. In other words, if the coin agrees, you will:
        <br/>
        <input type='text' name='desired-decision' value={props.preferredDecision} placeholder='Enter result' onChange={e => props.preferredChange(e)}></input>
        <br/>
        The other result. If the coin doesn't agree, you will:
        <br/>
        <input type='text' name='other-decision' value={props.otherDecision} placeholder='Enter other result' onChange={e => props.otherChange(e)}></input>
        <br/>
      </div>
    </div>
  )
}

export default FlipCriteria;

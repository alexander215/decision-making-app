import React, { useState } from 'react';
import { render } from 'react-dom';




const FlipACoin = () => {
    // This is whether the user has selected heads or tails.
    const [currentChoice, setCurrentChoice] = useState('Heads');
    // This is whether the coin flip resulted in heads or tails.
    const [flipResult, setFlipResult] = useState('?');
    // This is the outcome if the user guessed the flip result correctly.
    const [preferredDecision, setPreferredDecision] = useState('');
    // This is the outcome if the user guessed the flip result incorrectly.
    const [otherDecision, setOtherDecision] = useState('');
    // This is informing the user of what they have to do, based on the outcome.
    const [resultStatus, setResultStatus] = useState('');
    // This sets whether the flip has occurred. This makes the selection criteria OR the results visible.
    const [flipStatus, setFlipStatus] = useState('notFlipped');
    // This will inform the user that they have to fill selection criteria before they can flip.
    const [criteriaStatus, setCriteriaStatus] = useState('');

    // This will decide the result of the coin flip: heads or tails
    const coinDecision = () => {
        let sides = ['Heads', 'Tails'];
        let sideFlipped = sides[Math.floor(Math.random() * Math.floor(2))]
        console.log(sideFlipped,'<- in coin decision')
        setFlipResult(sideFlipped);
        return sideFlipped;
    }

    // This calculates whether the user won the flip, an sends the message about when they need to do.
    const flipWinner = (flipWinner) => {
        if (flipWinner === currentChoice) {
            setResultStatus(`Yes!!!! You should ${preferredDecision}.`)
        } else {
            setResultStatus(`No!!! You should ${otherDecision}`)
        }
    }

    // This is the coin flip.
    const flipTheCoin = () => {
        if ((preferredDecision === '') || (otherDecision === '')) {
            setCriteriaStatus('Please set the requirements.');
        } else {
            let flippedCoin = coinDecision();
            flipWinner(flippedCoin);
            setFlipStatus('flipped')
        }
    }

    // This will reset the game if the user would like to flip a second time.
    const resetTheGame = (e) => {
        setFlipStatus('notFlipped');
        setPreferredDecision('')
        setOtherDecision('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setPreferredDecision({...e.target.value});
        console.log(preferredDecision, 'preferd dec')
    }
    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })


    const CoinChoices = () => {
        return (
            <div>
                {/* <div className={(flipStatus === 'notFlipped') ? 'visible' : 'hidden'} > */}
                    {/* <div>
                        Your desired result. In other words, if the coin agrees, you will:
                        <br/>
                        <input type='text' name='desired-decision' value={preferredDecision} placeholder='Enter result' onChange={e => setPreferredDecision(...e.target.value)}></input>
                        <br/>
                        The other result. If the coin doesn't agree, you will:
                        <br/>
                    </div> */}
    
                    <div>(Click choice to toggle.)</div>
                    <div value='Heads' className={(currentChoice === 'Heads') ? 'selected' : ''} onClick={e => setCurrentChoice('Heads')}>Heads</div>
                    <div value='Tails' className={(currentChoice === 'Tails') ? 'selected' : ''} onClick={e => setCurrentChoice('Tails')}>Tails</div>
                    <button onClick={e => flipTheCoin()}>Flip the coin!</button>
                    <br/>
                    {criteriaStatus}
                {/* </div>             */}
            </div>
        )
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
                <input type='text' name='desired-decision' value={preferredDecision} placeholder='Enter result' onChange={e => setPreferredDecision(e.target.value)}></input>
                <br/>
                The other result. If the coin doesn't agree, you will:
                <br/>
                <input type='text' name='other-decision' value={otherDecision} placeholder='Enter other result' onChange={e => setOtherDecision(e.target.value)}></input>
                <br/>
            </div>
            <CoinChoices />

            {/* This is the selection criteria. It will be hidden once the coin is flipped, until a new game is started. */}


            {/* This is the result. This will be hidden until the coin is flipped. */}
            <div className={(flipStatus === 'notFlipped') ? 'hidden' : 'visible'}>
                <h2>Flip results:</h2>
                Your choice is: {currentChoice}
                <br/>
                The result is: {flipResult}
                <br/>
                {resultStatus}
                <br/>
                <button onClick={e => resetTheGame()}>Set up another flip.</button>
            </div>

        </div>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const FlipACoin = () => {
//     const [ coinChoices, setCoinChoices ] = useState({
//         currentChoice: 'Heads',
//         flipResult: '?',
//         preferredDecision: '',
//         otherDecision: '',
//         resultStatus: '',
//         flipStatus: 'notFlipped',
//         criteriaStatus: ''
//     })

//     // This will decide the result of the coin flip: heads or tails
//     const coinDecision = () => {
//         let sides = ['Heads', 'Tails'];
//         let sideFlipped = sides[Math.floor(Math.random() * Math.floor(2))]
//         console.log(sideFlipped,'<- in coin decision')
//         setCoinChoices({flipResult: sideFlipped});
//         // setFlipResult(sideFlipped);
//         return sideFlipped;
//     }

//     // This calculates whether the user won the flip, an sends the message about when they need to do.
//     const flipWinner = (flipWinner) => {
//         if (flipWinner === coinChoices.currentChoice) {
//             setCoinChoices({resultStatus: `Yes!!!! You should ${coinChoices.preferredDecision}.`})
//         } else {
//             setCoinChoices({resultStatus: `No!!! You should ${coinChoices.otherDecision}.`})
//         }
//     }

//     // This is the coin flip.
//     const flipTheCoin = () => {
//         setCoinChoices({preferredDecision: 'test'})
//         console.log(coinChoices.preferredDecision)
//         console.log(`other decision: ${coinChoices.otherDecision}`)
//         console.log(`Preferred decision: ${coinChoices.preferredDecision}`)
//         console.log(`current choice: ${coinChoices.currentChoice}`)
//         if ((coinChoices.preferredDecision === '') || (coinChoices.otherDecision === '')) {
//             setCoinChoices({criteriaStatus: 'Please set the requirements.'})
//         } else {
//             let flippedCoin = coinDecision();
//             flipWinner(flippedCoin);
//             setCoinChoices({flipStatus: 'flipped'});
//         }
//     }
    
//     // This will reset the game if the user would like to flip a second time.
//     const resetTheGame = (e) => {
//         setCoinChoices({flipStatus: 'notFlipped'});
//         setCoinChoices({preferredDecision: ''});
//         setCoinChoices({otherDecision: ''});
//     }
//     const changeHandler = (e) => {
//         // e.persist();
//         // const name = e.target.name;
//         // const value = e.target.value;
//         // console.log(name);
//         console.log(e);
//         console.log(e.target.preferredDecision);
//         // setCoinChoices({name: e.target.value})
//         // setCoinChoices({preferredDecision: e.target.value})
//         // setCoinChoices({e.target.name: e.target.value
// //     }
//     }

//     const clickTest = () => {
//         const decisionDetails = {
//             'Preferred Decision': coinChoices.preferredDecision,
//             'Other decision': coinChoices.otherDecision
//         }
//         console.log(decisionDetails)
//     }

//     return (
//         <div>
//             <h1>Flip A Coin</h1>
//             Every indecisive person knows that the best way to make a tough decision is to leave it to good old Heads or Tails.
//             <br/>
//             All you have to do is enter the decision you'd like, and choose whether it happens on heads or tails. Let fate do the rest.
//             <hr/>

//             {/* This is the selection criteria. It will be hidden once the coin is flipped, until a new game is started. */}
//             {/* <div className={(coinChoices.flipStatus === 'notFlipped') ? 'visible' : 'hidden'} > */}
//             <div>
//                 <div>
//                     Your desired result. In other words, if the coin agrees, you will:
//                     <br/>
//                     {/* <input type='text' name='preferredDecision' value={coinChoices.preferredDecision || ''} placeholder='Enter result' onChange={e => setCoinChoices({preferredDecision: e.target.value})}></input> */}
//                     {/* <input type='text' name='preferredDecision' value={coinChoices.preferredDecision || ''} placeholder='Enter result' onChange={e => changeHandler({preferredDecision: e.target.value}, {name: 'preferredDecision'})}></input> */}
//                     {/* <input type='text' name='preferredDecision' value={coinChoices.preferredDecision} placeholder='Enter result' onChange={e => setCoinChoices({preferredDecision: e.target.value})}></input> */}
//                     <input type='text' name='preferredDecision' value={coinChoices.preferredDecision} placeholder='Enter result' onChange={e => setCoinChoices({preferredDecision: e.target.value})}></input>
//                     <br/>
//                     The other result. If the coin doesn't agree, you will:
//                     <br/>
//                     <input type='text' name='otherDecision' value={coinChoices.otherDecision} placeholder='Enter result' onChange={e => setCoinChoices({otherDecision: e.target.value})}></input>
//                 </div>

//                 <div>(Click choice to toggle.)</div>
//                 <div value='Heads' className={(coinChoices.currentChoice === 'Heads') ? 'selected' : ''} onClick={e => setCoinChoices({currentChoice: 'Heads'})}>Heads</div>
//                 <div value='Tails' className={(coinChoices.currentChoice === 'Tails') ? 'selected' : ''} onClick={e => setCoinChoices({currentChoice: 'Tails'})}>Tails</div>
//                 <button onClick={e => flipTheCoin()}>Flip the coin!</button>
//                 <button onClick={clickTest}>Flip the coin!</button>
//                 <br/>
//                 {coinChoices.criteriaStatus}
//             </div>

//             {/* This is the result. This will be hidden until the coin is flipped. */}
//             <div className={(coinChoices.flipStatus === 'notFlipped') ? 'hidden' : 'visible'}>
//                 <h2>Flip results:</h2>
//                 Your choice is: {coinChoices.currentChoice}
//                 <br/>
//                 The result is: {coinChoices.flipResult}
//                 <br/>
//                 {setCoinChoices.resultStatus}
//                 <br/>
//                 <button onClick={e => resetTheGame()}>Set up another flip.</button>
//             </div>

//         </div>
//     )

// }


export default FlipACoin;
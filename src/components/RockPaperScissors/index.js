import React, { useState } from 'react';

const RockPaperScissors = () => {
    const [currentChoice, setCurrentChoice] = useState('Rock');
    

    return (
        <div>
            <h1>Rock, Paper, Scissors</h1>
            The rules are as old as time, but unless you've been living under, well, paper:
            Rock breaks scissors, scissors cut paper, paper covers rock. It's a vicious circle.
            No one knows why a rock gives up when it's covered by a piece of paper, but that's neither here nor there.
            <hr/>
            <div cursor='pointer' value='Rock' className={(currentChoice == 'Rock') ? 'selected' : ''} onClick={e => setCurrentChoice('Rock')}>

                Rock.
            </div>
            <div value='Rock' className={(currentChoice == 'Paper') ? 'selected' : ''} onClick={e => setCurrentChoice('Paper')}>
                Paper.
            </div>
            <div value='Rock' className={(currentChoice == 'Scissors') ? 'selected' : ''}onClick={e => setCurrentChoice('Scissors')}>
                Scissors.
            </div>
            

        </div>
    )

}

export default RockPaperScissors;
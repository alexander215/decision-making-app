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


////////////////////////////////////////////////////////////////////////////////////////////////
// This was the initial version that used classes instead of hooks:
////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';

// class RandomNumber extends Component {
//     state = {
//         minNumber: 0,
//         maxNumber: 10,
//         random: 0
//     };

//     randomize = () => {
//         if (this.state.minNumber > this.state.maxNumber){
//             return "That's cheating. The little number has to be smaller. Try again."
//         } else {
//             return Math.floor((Math.random() * (this.state.maxNumber - this.state.minNumber)) + this.state.minNumber);
//         }
//     };

//     handleChange = (e) => {
//         this.setState({
//             [e.currentTarget.name]: parseInt(e.currentTarget.value)
//         });
//         console.log(this.state);
//     };

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         if ((this.state.minNumber < 0) || (this.state.maxNumber < 0)){
//             this.setState({ random: "We only deal with positive numbers here. Try again."})
//         } else {
//             const randomNumber = this.randomize();
//             parseInt(randomNumber);
//             this.setState({ random: randomNumber })
//         }
//         console.log(typeof this.state.minNumber);
//         console.log(this.state.minNumber);

//     }


//     render() {
//         return(
//             <div>
//                 <h1>Random Number Generator</h1>
//                 Pick a random number between <u>{this.state.minNumber}</u> and <u>{this.state.maxNumber}</u>.
//                 <br/>
//                 <br/>

//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Minimum number: 
//                     </label>
//                     <input type='number' name='minNumber' value={this.state.minNumber} onChange={this.handleChange} />
//                         <br/>
//                     <label>
//                         Maximum number: 
//                     </label>
//                     <input type='number' name='maxNumber' value={this.state.maxNumber} onChange={this.handleChange} />
//                     <br/>
//                     <button type='submit'>Randomize!!!</button>
//                 </form>
//                 <h2>Your random number is:</h2>
//                 <h3>{this.state.random}</h3>
//             </div>

//         )

//     };
// }

// export default RandomNumber;
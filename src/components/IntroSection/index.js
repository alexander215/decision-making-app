import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IntroSection extends Component {
    state = {
        user: 'Player 1'
    }

    render(){
        return(
            <div>
                Welcome to the game! 
                <br/>
                First, let’s get to know each other. What is your name?
                <br/>
                <input type='text' name='user' placeholder='Your name' />
                <button type='submit'>Submit</button>
                <br/>
                <Link class="link" >Or, just jump right in...</Link>
            </div>
        )
    }

}
export default IntroSection;
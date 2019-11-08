import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import DecisionList from '../DecisionList';
import RockPaperScissors from '../RockPaperScissors';

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
                <h2>Or, just jump right in:</h2>
                {/* <Link class="link" to={ROUTES.DECISIONS_LIST}>Or, just jump right in...</Link> */}
                <DecisionList />
            </div>
        )
    }

}
export default IntroSection;
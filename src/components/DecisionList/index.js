import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class DecisionList extends Component {
    state = {
        user: ''
    }

    render(){
        return(
            <div>
                This is the decision list.
                <li><Link to={ROUTES.RANDOM_NUMBER}>Random Number</Link></li>
                <li><Link to={ROUTES.ROCK_PAPER_SCISSORS}>Rock, Paper, Scissors</Link></li>
                <li><Link to={ROUTES.FLIP_A_COIN}>Flip a Coin</Link></li>


            </div>
        )
    }
}

export default DecisionList;
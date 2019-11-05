import React from 'react';
import './style.css';
import { Route, Link, Switch } from 'react-router-dom';
import IntroSection from '../IntroSection';
import DecisionList from '../DecisionList';
import RandomNumber from '../RandomNumber';
import * as ROUTES from '../../constants/routes';


const Error404Message = () => {
  return (
    <div>
      <h1>Bad decision, that page doesn't exist.</h1>
      <Link to={ROUTES.LANDING_PAGE}>Let's head back to try again.</Link>
    </div>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.LANDING_PAGE} component={IntroSection} />
        <Route exact path={ROUTES.DECISIONS_LIST} component={DecisionList} />
        <Route exact path={ROUTES.RANDOM_NUMBER} component={RandomNumber} />

        <Route component={ Error404Message } />
      </Switch>
    </div>
  );
}

export default App;

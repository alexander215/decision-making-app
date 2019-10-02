import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import IntroSection from '../IntroSection';
import DecisionList from '../DecisionList';
import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <div>
      <Route exact path={ROUTES.LANDING_PAGE} component={IntroSection} />
      <Route exact path={ROUTES.DECISIONS_LIST} component={DecisionList} />
    </div>
  );
}

export default App;

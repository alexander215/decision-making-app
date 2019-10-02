import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import IntroSection from '../IntroSection';
import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <div>
      <Route exact path={ROUTES.LANDING_PAGE} component={IntroSection} />
    </div>
  );
}

export default App;

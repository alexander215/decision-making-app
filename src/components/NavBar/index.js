import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const index = () => {
  return (
    <div>
      <Link to={ROUTES.LANDING_PAGE}>Home</Link>
    </div>
  )
}

export default index

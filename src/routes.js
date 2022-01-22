import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from './App';
import FollowMe from './FollowMe.js';
//import Restaurants from './components/restaurants.js';
//import RestaurantDetails from './components/restaurantDetails.js';

export default function RoutesMap() {
  return(
      <Router>
        <Suspense fallback = {<div> Loading! </div>}>
            <Routes>
              <Route exact path = '/Anim-Story' element = {<App/>} />
              <Route path = '/Anim-Story/FollowMe' element = {<FollowMe />}/>
            </Routes>
        </Suspense>
      </Router>
  )
}

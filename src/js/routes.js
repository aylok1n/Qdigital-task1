import React from 'react';
import {Route, Switch} from 'react-router';
import Home from './pages/Home';
import Slider from './pages/Slider';
import Player from './pages/Player';

export let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/slider">
      <Slider />
    </Route>
    <Route path="/player">
      <Player />
    </Route>
  </Switch>
);

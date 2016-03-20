// mapping of routes here

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AllSystems from './components/all_systems';
import SystemsShow from './components/systems_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AllSystems} />
    <Route path="system/:id" component={SystemsShow} />
  </Route>
);

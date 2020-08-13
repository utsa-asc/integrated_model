import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trial from './trial';
import Trial2 from './trial2';

const Main = () => (
  <Switch>
    <Route path="/" component={Trial} />
    <Route path="/trial2" component={Trial2} />
  </Switch>
)

export default Main;
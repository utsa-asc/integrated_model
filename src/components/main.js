import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trial from './trial';
import Trial2 from './trial2';
import Trial3 from './trial3';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Trial} />
    <Route path="/trial2" component={Trial2} />
    <Route path="/trial3" component={Trial3} />
  </Switch>
)

export default Main;

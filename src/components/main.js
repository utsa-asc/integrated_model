

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/main';
import Button from './pages/button';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/button" component={Button} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app'),
);

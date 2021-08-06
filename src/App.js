import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Join } from './pages/Join';

export function App() {
  return (
    <Fragment>
      <Switch>
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>
      <Route path='/home' exact>
        <Home />
      </Route>
      <Route path='/join'>
        <Join />
      </Route>
      </Switch>
    </Fragment>
  );
}

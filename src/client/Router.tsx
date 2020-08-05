import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Company from './pages/Companies';
import Person from './pages/Persons';

const Router = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path='/home/'>{/* ex: <Home /> */}</Route>
        <Route path='/companies'>
          <Company />
        </Route>
        <Route path='/people'>
          <Person />
        </Route>
      </Switch>
    </>
  );
};

export default Router;

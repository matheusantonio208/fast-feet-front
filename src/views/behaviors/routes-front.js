import React from 'react';
import { Switch } from 'react-router-dom';
import ExamplePage from '#pages/example-page.js';
import { Route } from './root-layouts';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ExamplePage} />
      <Route path="/next-page" exact component={ExamplePage} />
    </Switch>
  );
}

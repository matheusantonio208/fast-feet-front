import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '#layouts/root-layouts.js';

import SignInPage from '#pages/signin-page.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={() => <h1>Root</h1>} />
      <Route path="/login" component={SignInPage} />
    </Switch>
  );
}

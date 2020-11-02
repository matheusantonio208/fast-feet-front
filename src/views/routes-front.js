import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '#pages/_layouts/root-layouts.js';
import OrdersPage from '#pages/Orders/orders-page.js';
import SignInPage from '#pages/SignIn/signin-page.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={OrdersPage} />
      <Route path="/login" component={SignInPage} />
      <Route path="/deliveryman" component={SignInPage} />
      <Route path="/recipient" component={SignInPage} />
      <Route path="/problems" component={SignInPage} />
    </Switch>
  );
}

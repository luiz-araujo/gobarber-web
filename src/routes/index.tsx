import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import ForgotPassword from '../pages/ForgotPassword/index';
import ResetPassword from '../pages/ResetPassword/index';
import Profile from '../pages/Profile';

import Dashboard from '../pages/Dashboard';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;

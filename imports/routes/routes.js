import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './../ui/Dashboard';
import Login from './../ui/Login';
import Signup from './../ui/Signup';
import NotFound from './../ui/NotFound';

import { onEnter } from './../api/history';

export const routes = (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Login} exact onEnter={onEnter} />
				<Route path="/signup" component={Signup} onEnter={onEnter} />
				<Route path="/dashboard" component={Dashboard} onEnter={onEnter} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
);

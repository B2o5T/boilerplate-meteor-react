import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import ReactDOM from 'react-dom';
//import {Session} from 'meteor/session';

import { routes } from './../imports/routes/routes';
import { onAuthChange } from './../imports/api/history';
import './../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
	// Storage user authentication status
	const isAuthenticated = !!Meteor.userId(); // takes truthy or falsy value and return true or false (convert to boolean value)
	//console.log('isAuthenticated:', isAuthenticated);
	onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
	ReactDOM.render(routes, document.getElementById('root'));
});

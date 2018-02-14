import { Meteor } from 'meteor/meteor';
// method for creating a history object (HTML5 history API)
import createHistory from "history/createBrowserHistory";

const history = createHistory();
const getCurrentPath = () => {
	// Get the current location.
	// location is an object like window.location
	const location = history.location;
	// Return current pathname
	return location.pathname; // The path of the URL
};

// Define what pages serves what purposes
const unauthenticatedPages = ['/', '/signup']; // array of pages that user should not able to visit
const authenticatedPages = ['/dashboard'];

// fixing .goBack
export const onEnter = () => {
	if (Meteor.userId()) { // if there is userId value
		history.replace('/dashboard'); // redirect to /links
	} else {
		history.replace('/'); // redirect to Login
	}
};

// Authentication handler replace pathname
// for private and public pages by looking at authentication property, true or false
export const onAuthChange = (isAuthenticated) => {
	const pathname = getCurrentPath();
	const isUnauthenticatedPages = unauthenticatedPages.includes(pathname);
	const isAuthenticatedPages = authenticatedPages.includes(pathname);

	// if user isAuthenticated === true and user visit '/' or '/signup' redirect to '/links'
	if (isAuthenticated && isUnauthenticatedPages) {
		history.replace('/dashboard');
		// if user isAuthenticated !== true and user visit '/links' redirect to '/'
	} else if (!isAuthenticated && isAuthenticatedPages) {
		history.replace('/');
	}
};

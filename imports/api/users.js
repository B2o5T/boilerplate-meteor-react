import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// import SimpleSchema for validation user email
import SimpleSchema from 'simpl-schema';

// this function gets call every time new user is about to get creation
Accounts.validateNewUser((user) => { // gets call with new user information
	const email = user.emails[0].address; // grab email value

	new SimpleSchema({
		email: {
			type: String,
			regEx: SimpleSchema.RegEx.Email
		}
	}).validate({email});

	return true; // return true allow user creation
});

// Customize the Error That is Thrown
// We register a callback function on defineValidationErrorTransform method

import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((e) => {
	return new Meteor.Error(400, e.message); // we pass error and we return new Meteor.Error
});

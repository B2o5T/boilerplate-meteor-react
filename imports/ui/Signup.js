import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e) {
		e.preventDefault();

		const email = this.refs.email.value.trim(); // object with key: value pair
		const password = this.refs.password.value;

		if (password.length < 5) { // if password less then 5 characters
			// stop function, set error
			return this.setState({error: 'Password must have at least 5 characters'});
		}

		// takes 2a -> object with email and password, callback
		Accounts.createUser({email, password}, (err) => {
			if (err) {
				console.log(err);
				this.setState({error: err.reason});
			} else {
				this.setState({error: ''});
				this.props.history.replace('/dashboard');
			}
		});
	}

	render() {
		return (
				<div className="boxed-view">
					<div className="boxed-view__box">
						<h1>Join</h1>
						<form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
							<input type="email" ref="email" name="email" placeholder="Your email" />
							<input type="password" ref="password" name="password" placeholder="Your password" />
							<button className="button">Create Account</button>
						</form>
						{this.state.error && <p>{this.state.error}</p>}

						<Link to="/">Already have an account?</Link>
					</div>
				</div>
		);
	}
}

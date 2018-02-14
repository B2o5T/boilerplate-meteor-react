import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e) {
		e.preventDefault();

		// Grabbing values
		const email = this.refs.email.value.trim(); // object with key: value pair
		const password = this.refs.password.value;

		// Calling login with password method
		Meteor.loginWithPassword({email}, password, (err) => {
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
						<h1>Login</h1>
						{this.state.error && <p>{this.state.error}</p>}

						<form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
							<input type="email" ref="email" name="email" placeholder="Your email" />
							<input type="password" ref="password" name="password" placeholder="Your password" />
							<button className="button">Login</button>
						</form>

						<Link to="/signup">Don't have an account?</Link>
					</div>
				</div>
		);
	}
}

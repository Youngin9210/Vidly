import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
	state = {
		account: { username: '', password: '' },
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const username = this.state.account.username;
		const password = this.state.account.password;
		console.log(username, password);
	};

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		// selecting element with current name attribute and getting the value
		account[input.name] = input.value;
		this.setState({ account });
	};

	render() {
		const { username, password } = this.state.account;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input
						name="username"
						value={username}
						label="Username"
						onChange={this.handleChange}
						type="text"
					/>
					<Input
						name="password"
						value={password}
						label="Password"
						onChange={this.handleChange}
						type="password"
					/>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;

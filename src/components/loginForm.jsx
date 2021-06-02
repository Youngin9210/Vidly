import React, { Component } from 'react';

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
		account[input.name] = input.value;
		this.setState({ account });
	};

	render() {
		const { username, password } = this.state.account;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							value={username}
							onChange={this.handleChange}
							autoFocus
							name="username"
							id="username"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={this.handleChange}
							name="password"
							id="password"
							type="password"
							className="form-control"
						/>
					</div>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;

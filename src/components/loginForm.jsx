import React, { Component } from 'react';

class LoginForm extends Component {
	state = {
		account: { username: '', password: '' },
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const username = this.state.account.username;
		console.log(username);
	};

	handleChange = (e) => {
		const account = { ...this.state.account };
		account.username = e.currentTarget.value;
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
							id="username"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" type="text" className="form-control" />
					</div>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;

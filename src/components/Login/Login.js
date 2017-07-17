import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    this.setState({
	      [name]: value
	    });
	  }


	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder='Your email' />
					</label>
					<label>
						<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder='Your password' />
					</label>
					<input type="submit" value="Submit" />
				</form>

				<h1>Login page!!!</h1>
			</div>
		);
	}
}

export default Login;
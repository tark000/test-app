import React, { Component } from 'react';

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
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
		console.log(event);
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		return (
			<div className="Registration">
				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder='Your email' />
					</label>
					<label>
						<input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder='Your password' />
					</label>
					<label>
						<input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} placeholder='Confirm password' />
					</label>
					<input type="submit" value="Submit" />
				</form>

				<h1>Registration page!!!</h1>
			</div>
		);
	}
}

export default Registration;
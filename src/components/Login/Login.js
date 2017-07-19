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
			<div className="Login bs-example container-fluid">
				<div className="jumbotron row">
					<form onSubmit={this.handleSubmit} className="col-md-6 col-md-offset-3">
						<h3>Please enter your email and password</h3>
						<div className="form-group">
							<input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} placeholder='Your email' />
						</div>
						<div className="form-group">
							<input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleInputChange} placeholder='Your password' />
						</div>
						<div className="form-group">
							<input type="submit" value="Login" className="btn btn-success" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userLogin } from '../../redux/actions/userActions';
import { Alert } from 'react-bootstrap';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user : {
				email: '',
				password: ''
			},
			warning: { 
				showWarning: false,
				text: 'login error',
				description: ''
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.isUser = this.isUser.bind(this);
	}

	handleInputChange(event) {
		const user = this.state.user
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    user[name] = value;
	    this.setState({user});
	  }

	findUser(user) {
		let users = JSON.parse(localStorage.getItem("users"));
		return users.find(this.isUser);
	}

	isUser(user) {
		return user.email === this.state.user.email && user.password === this.state.user.password;
	}

	handleSubmit(event) {
		this.setState({warning: {showWarning: false}});
		if (this.state.user.email && this.state.user.password) {
			if (this.findUser(this.state.user)) {
				const { dispatch } = this.props;
				dispatch(userLogin(this.state.user));
				let user = {email: '', password: ''};
				this.setState({user});
			} else {
				const warning = { 
					showWarning: true,
					text: 'Login error!',
					description: 'Wrong email or password.'
				};
			this.setState({warning})	
			}
		} else {
			const warning = { 
				showWarning: true,
				text: 'Login error!',
				description: 'Emty email or password.'
			};
			this.setState({warning})
		}
		event.preventDefault();
	}

	render() {
		const AlertBlock = () =>
			<Alert bsStyle="warning">
			    <strong>{this.state.warning.text}</strong> {this.state.warning.description}
		    </Alert>
		
		return (
			<div className="Login bs-example container-fluid">
				<div className="jumbotron row">
					<div>
						{ this.state.warning.showWarning ? <AlertBlock /> : ''}
					</div>
					<form onSubmit={this.handleSubmit} className="col-md-6 col-md-offset-3">
						<h3>Please enter your email and password</h3>
						<div className="form-group">
							<input type="email" name="email" className="form-control" value={this.state.user.email} onChange={this.handleInputChange} placeholder='Your email' />
						</div>
						<div className="form-group">
							<input type="password" name="password" className="form-control" value={this.state.user.password} onChange={this.handleInputChange} placeholder='Your password' />
						</div>
						<div className="form-group">
							<input type="submit" value="Sign-in" className="btn btn-success" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
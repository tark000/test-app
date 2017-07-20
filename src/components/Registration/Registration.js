import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userRegistration } from '../../redux/actions/userActions';
import { Alert } from 'react-bootstrap';

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user : {
				email: '',
				password: '',
				confirmPassword: ''
			},
			warning: { 
				showWarning: false,
				text: 'login error',
				description: ''
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const user = this.state.user
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    user[name] = value;
	    this.setState({user});
	  }


	handleSubmit(event) {
		this.setState({warning: {showWarning: false}});
		if (this.state.user.email && this.state.user.password && this.state.user.confirmPassword && this.state.user.password != this.state.user.confirmPassword) {
			const { dispatch } = this.props;
			dispatch(userRegistration(this.state.user));
			let user = {email: '', password: '', confirmPassword: ''};
			this.setState({user});
		} else {
			const warning = { 
				showWarning: true,
				text: 'Registration error!',
				description: 'Emty email or password. Or passwords is wrong'
			};
			this.setState({warning});
		}
		event.preventDefault();
	}

	render() {
		const AlertBlock = () =>
			<Alert bsStyle="warning">
			    <strong>{this.state.warning.text}</strong> {this.state.warning.description}
		    </Alert>
		return (
			<div className="Registration bs-example container-fluid">
				<div className="jumbotron row">
					<div>
						{ this.state.warning.showWarning ? <AlertBlock /> : ''}
					</div>
					<form onSubmit={this.handleSubmit} className="col-md-6 col-md-offset-3">
						<h4>For registration please enter your email and password</h4>
						<div className="form-group">
							<input type="email" name="email" className="form-control" value={this.state.user.email} onChange={this.handleInputChange} placeholder='Your email' />
						</div>
						<div className="form-group">
							<input type="password" name="password" className="form-control" value={this.state.user.password} onChange={this.handleInputChange} placeholder='Your password' />
						</div>
						<div className="form-group">
							<input type="password" name="confirmPassword" className="form-control" value={this.state.user.confirmPassword} onChange={this.handleInputChange} placeholder='Confirm password' />
						</div>
						<div className="form-group">
							<input type="submit" value="Registration" className="btn btn-success" />
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

export default connect(mapStateToProps)(Registration);
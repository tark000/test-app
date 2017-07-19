import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/userActions';

class Head extends Component {
	render() {
		const { email, auth } = this.props.user
		const { dispatch } = this.props
		const Logout = () => <li><a onClick={() => dispatch(userLogout())} className="page-scroll ">Logout</a></li>

		return (
			<div className="Head">
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="/">{ auth ? 'Hi' + email : 'Welcome'}</a>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <ul className="nav navbar-nav">
				        <li><Link to="/" className="page-scroll">Home</Link></li>
			            <li><Link to="/shop" className="page-scroll">Shop</Link></li>
			            <li><Link to="/registration" className="page-scroll">Registration</Link></li>
			            <li><Link to="/login" className="page-scroll">Login</Link></li>
			            { auth ? <Logout /> : ''}
				      </ul>
				      
				    </div>
				  </div>
				</nav>
			</div>
		);
	}
}

function mapStateToProps (state) {
  return {
    user: state.user,
    shops: state.shops
  }
}

export default connect(mapStateToProps)(Head);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { shopRequest } from '../../redux/actions/shopActions';
import PropTypes from 'prop-types';

class Shop extends Component {
	static propTypes = {
	    dispatch: PropTypes.func.isRequired
	};

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(shopRequest())
	}

	render() {
		const { shops} = this.props.shops
		const listItems = shops.map((shop) =>
		  <li key={shop.guid}>{shop.title} {shop.body}</li>
		);
		return (
			<div className="Shop">
				<h1>Shop page!!!</h1>
				<ul>{listItems}</ul>
			</div>
		);
	}
}

function mapStateToProps (state) {
  return {
    shops: state.shops
  }
}

export default connect(mapStateToProps)(Shop);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { shopRequest } from '../../redux/actions/shopActions';
import { Pagination } from 'react-bootstrap';
import './shops.css';

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage: 0
		}
		this.getInitialState = this.getInitialState.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props
		dispatch(shopRequest())
	}

	getInitialState() {
		return {
			activePage: 1
		};
	}

	handleSelect(eventKey) {
		this.setState({
			activePage: eventKey
		});
	}

	render() {
		const { shops } = this.props.shops
		const listItems = shops.slice(this.state.activePage, this.state.activePage + 10).map((shop, index) =>
		  <tr key={shop.id} className={ index%2  ? 'active' : ''}> 
			  <td>{shop.title} </td>
			  <td>{shop.cover} </td>
			  <td>{shop.description.substr(0, 60)}... </td>
			  <td>{shop.link} </td>
		  </tr>
		);
		return (
			<div className="Shop">
				<div className="table-responsive">
				  <table className="table">
				  	<thead> 
					  	<tr> 
						  	<th>Title</th>
						  	<th>Cover</th>
						  	<th>Description</th>
						  	<th>Link</th>
					  	</tr> 

				  	</thead>
				  	<tbody>
				  		{listItems}
				  	</tbody>
				  </table>
				  <div className='shops-placeholder'>
					  <Pagination
				        prev
				        next
				        first
				        last
				        ellipsis
				        boundaryLinks
				        items={shops.length/10}
				        maxButtons={5}
				        activePage={this.state.activePage}
				        onSelect={this.handleSelect} />
				  </div>
				</div>
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
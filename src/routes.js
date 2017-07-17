import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Head from './components/Head';
import Shop from './components/Shop';
import Registration from './components/Registration';
import Login from './components/Login';
import App from './App';
import NotFoundPage from './components/NotFoundPage';


const Routes = (props) => (
	<Router>
		<div>
			<Head/>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route path="/shop" component={Shop}/>
				<Route path="/registration" component={Registration}/>
				<Route path="/login" component={Login}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);
export default Routes;
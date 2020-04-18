import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from '../../container/Layout/Layout';


 class AuthRoutes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/layouts" exact component={Layout} />
				<Redirect from = "/" to="/layouts" exact/>
				
			</Switch>
		)
	}
}
export default AuthRoutes;

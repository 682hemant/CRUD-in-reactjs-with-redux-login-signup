import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../../components/LogIn/SignUp'
import LogIn from '../../components/LogIn/LogIn'


 class AuthRoutes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={LogIn} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		)
	}
}
export default AuthRoutes;

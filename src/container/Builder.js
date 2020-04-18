import React, { Component } from 'react';
// import LogIn from '../components/LogIn/LogIn'
// import SignUp from '../components/LogIn/SignUp'
import './Builder.css'
import Aside from '../components/Aside/Aside'
// import { Switch, Route } from 'react-router-dom'
// import PublicRoutes from '../routes/public/index'
import AuthRoutes from '../routes/public/AuthRoutes';

class Builder extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-8 Asid">
						<Aside />
					</div>
					<div className="col-4 ">
						<AuthRoutes />
					</div>
				</div>
			</div>
		)
	}
}
export default Builder;

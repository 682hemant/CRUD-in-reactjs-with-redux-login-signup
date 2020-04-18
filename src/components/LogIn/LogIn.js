import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import { login } from '../../redux/actions/actionCreator'
import * as actionType from '../../redux/actions/index'

class LogIn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: "",
			password: ''
		}

	}
	handleChange = (e) => {

		this.setState({
			[e.target.name]: e.target.value
		})

	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitForm(
			{

				email: this.state.email,
				password: this.state.password
			})
	}


	render() {
		return (
			<div>
				<form className="mt-5">
					<div class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							name="email"
							value={this.state.email}
							onChange={this.handleChange} />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group ">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1"
							name="password"
							value={this.state.password}
							onChange={this.handleChange} />
					</div>

					{/* <Router> */}
					{/* <Link to='/' className="btn btn-primary"> Login </Link> */}
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>login</button>
					{/* <button type="submit" className="btn btn-secondary">Signup</button> */}
					<Link to='/signup' className="btn btn-secondary"> Sign up </Link>
					{/* </Router> */}
				</form>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitForm: (user) => dispatch(actionType.login(user))
	};
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);



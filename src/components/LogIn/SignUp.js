import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { signup } from '../../redux'
import * as actionType from '../../redux/actions/index'

class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			password: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	static getDerivedStateFromProps(props,state){
		console.log(props,state)
		return state
	}

	handleSubmit = (e) => {
		// e.preventDefault();
		this.props.onSubmitForm(
			{
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				password: this.state.password
			})
	}

	render() {
		return (
			<div>
			<form className="mt-5"> 
					<div className="form-group">
						<label for="exampleInputText">Name</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputText"
							name="firstname"
							value={this.state.name}
							onChange={this.handleChange}
							aria-describedby="textHelp"
							required />
					</div>
					<div className="form-group">
						<label for="exampleInputLastName">Lastname</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputLastName"
							name="lastname"
							value={this.state.lastname}
							aria-describedby="textHelp"
							onChange={this.handleChange}
							required />
					</div>
					<div className="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control "
							id="exampleInputEmail1"
							name="email"
							value={this.state.email}
							aria-describedby="emailHelp"
							onChange={this.handleChange}
							required />
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group ">
						<label for="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control "
							id="exampleInputPassword1"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							required />
					</div>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Signup</button>

				 </form> 
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmitForm: (user) => dispatch(actionType.signup(user))
	};
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);



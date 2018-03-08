import React from 'react'
import clientAuth from '../clientAuth'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		clientAuth.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				// this programatically redirects you to / after successful
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className="row align-items-center justify-content-center">
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<div className="form-group">
								<label htmlFor="exampleInputEmail">Email</label>
								<input className="form-control" type="text" placeholder="Email" name="email" value={email} ref="email" />
							</div>	
							<div className="form-group">
								<label htmlFor="exampleInputName">Password</label>
								<input className="form-control" type="password" placeholder="Password" name="password" value={password} ref="password"/>
							</div>	
							<button className="btn btn-primary" type="submit" value="Submit">Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn
import React from 'react'
import clientAuth from '../clientAuth'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
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
		console.log(this)
		clientAuth.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp jumbotron jumbotron-fluid'>
				<div className="row align-items-center justify-content-center">
					<div className='column'>
						<h1>Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<div className="form-group">
								<label htmlFor="exampleInputName">Name</label>
								<input type="text" className="form-control" id="exampleInputName" ref="name" aria-describedby="nameHelp" placeholder="Name" name="name" value={name} />
							</div>	
							<div className="form-group">
								<label htmlFor="exampleInputEmail">Email</label>
								<input type="text" className="form-control" id="exampleInputEmail" ref="end" placeholder="Email" name="email" value={email} />
							</div>	
							<div className="form-group">
								<label htmlFor="exampleInputName">Password</label>
								<input type="password" placeholder="Password" name="password" value={password} className="form-control" id="exampleInputPassword" ref="password" />
							</div>	
								<button type="submit" className="btn btn-primary" onClick={this.onFormSubmit.bind(this)}>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp
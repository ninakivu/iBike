import React from 'react'
import clientAuth from '../clientAuth.js'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ 
      email: this.refs.email.value,
      password: this.refs.password.value
    })
  }
  handleSubmit = (event) => {
    // alert('User submitted' + this.state.value)
    console.log(this.refs.email.value)
    event.preventDefault()
    clientAuth.logIn({
      email: this.refs.email.value,
      password: this.refs.password.value
    }).then(user => {
      this.setState({ fields: { email: '', password: '' } })
      if(user) {
        this.props.onLoginSuccess(user)
        // this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit = {this.handleSubmit} >
          <label>
            Email:
            <input 
              type = "email"
              placeholder="user name"
              ref="email"
              // onChange = {this.handleChange}
              />
          </label>
          <label>
            Password:
            <input 
              type = "password"
              placeholder = "password"
              ref="password"
              // onChange = {this.handleChange}
              />
            </label>
          <button type="submit" value="Submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
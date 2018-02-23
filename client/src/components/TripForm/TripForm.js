import React from 'react'
import { Link } from 'react-router-dom'


class TripForm extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      start: '',
      end: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ 
      name: this.refs.name.value,
      start: this.refs.start.value,
      end: this.refs.end.value
    })
  }
  handleSubmit(event) {
    event.preventDefault() 

  }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    )
  }
}



export default TripForm
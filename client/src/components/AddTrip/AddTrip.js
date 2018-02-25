import React, { Component } from 'react'

class AddTrip extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      start:'',
      end:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault() 
    const fields = {
      name: this.refs.name.value,
      start: this.refs.start.value,
      end: this.refs.end.value,
      createdBy: this.props.c
    }
    this.props.onSubmit(fields)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Trip name</label>
            <input type="text" className="form-control" id="exampleInputName" ref="name" aria-describedby="nameHelp" placeholder="Enter trip name"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputStart">Start point:</label>
            <input type="text" className="form-control" id="exampleInputstart" ref="start" placeholder="start"/>
          </div>
          <div className="form-group">
          <label htmlFor="exampleInputEnd">End point:</label>
          <input type="text" className="form-control" id="exampleInputEnd" ref="end" placeholder="end"/>
        </div>
          <button type="submit" className="btn btn-primary">Add a trip</button>
        </form>
      </div>

    )
  }
}

export default AddTrip
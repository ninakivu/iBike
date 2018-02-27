import React from 'react'
import axios from 'axios'

class EditTrip extends React.Component {
  constructor(props) {
    super(props) 
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    const fields = {
      name: this.refs.name.value,
      start: this.refs.start.value,
      end: this.refs.end.value
    }
    return this.props.onSubmit(fields)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Trip name</label>
          <input type="tripname" className="form-control" id="exampleInputName" ref="name" aria-describedby="nameHelp" defaultValue={this.props.trip.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputStart">Start point:</label>
          <input type="start" className="form-control" id="exampleInputstart" ref="start" defaultValue={this.props.trip.start}/>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputEnd">End point:</label>
        <input type="end" className="form-control" id="exampleInputEnd" ref="end" defaultValue={this.props.trip.end}/>
      </div>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </form>

    )
  }
}

export default EditTrip
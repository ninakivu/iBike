import React from 'react'
import clientAuth from '../../clientAuth.js'

class EditTrip extends React.Component {
  constructor(props) {
    super(props) 
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault() 
    const fields = {
      name: this.refs.name.value,
      start: this.refs.start.value,
      end: this.refs.end.value
    }
    clientAuth.updateTrip(this.props.trip._id, fields).then(res => {
      console.log()

      if(res.data.success) {
        this.props.onUpdateTrip(res.data.updatedTrip)
      }
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group white">
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
        <label htmlFor="exampleFormControlSelect1" ref={this.state.mode}>Mode: </label>
        <select className="form-control column column-33 column-offset-33" ref="mode" id="exampleFormControlSelect1" defaultValue="bicycling">
          <option value="walking">Walk</option>
          <option value="bicycling">Bike</option>
          <option value="driving">Car share</option>
        </select>
      </div>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </form>

    )
  }
}

export default EditTrip
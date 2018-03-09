import React, { Component } from 'react'
import clientAuth from '../../clientAuth'
import { Redirect, browserHistory } from 'react-router'


class AddTrip extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      start:'',
      end:'',
      mode: 'bicycling',
      redirectToTrips: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault() 
    const fields = {
      name: this.refs.name.value,
      start: this.refs.start.value,
      end: this.refs.end.value,
      mode: this.refs.mode.value
    }
    clientAuth.createTrip(fields).then((res) => {
      if(res.data.success) {
        // this.setState({
        //   trips: [...this.state.trips, res.data.newTrip]
        // })
        this.props.onSubmit(res.data.newTrip)
        this.setState({
          redirectToTrips: true
        })
      }
    })
  }


  render() {
    if(this.state.redirectToTrips) {
      return <Redirect to="/trips/"/>
    }
    return (
      <div className="row align-items-center justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group column column-33 column-offset-33">
            <label htmlFor="exampleInputName">Trip name</label>
            <input type="text" className="form-control" id="exampleInputName" ref="name" aria-describedby="nameHelp" placeholder="Enter trip name"/>
          </div>
          <div className="form-group column column-33 column-offset-33">
            <label htmlFor="exampleInputStart">Start point:</label>
            <input type="text" className="form-control" id="exampleInputstart" ref="start" placeholder="start"/>
          </div>
          <div className="form-group column column-33 column-offset-33">
          <label htmlFor="exampleInputEnd">End point:</label>
          <input type="text" className="form-control" id="exampleInputEnd" ref="end" placeholder="end"/>
        </div>
        <div className="form-group column column-33 column-offset-33">
        <label htmlFor="exampleFormControlSelect1" ref={this.state.mode}>Mode: </label>
        <select className="form-control column column-33 column-offset-33" ref="mode" id="exampleFormControlSelect1" defaultValue="bicycling">
          <option value="walking">Walk</option>
          <option value="bicycling">Bike</option>
          <option value="driving">Car share</option>
        </select>
      </div>
          <button type="submit" className="btn btn-primary">Add a trip</button>
        </form>
      </div>

    )
  }
}

export default AddTrip
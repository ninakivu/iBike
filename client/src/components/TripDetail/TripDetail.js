import React from 'react'
import EditTrip from '../EditTrip/EditTrip'
import Map from '../Map/Map.js'
import clientAuth from '../../clientAuth'

class TripDetail extends React.Component {

  state = {
    show: false,
    trip: []
  }

  componentDidMount = () => {
    clientAuth.getTripDetails(this.props.tripId).then((res) => {
      this.setState({
        trip: res.data
      })
    })
  }

  onSubmit = (fields) => {
    clientAuth({method: 'patch', url: `/trips/${this.state.trip._id}`, data: fields})
    .then((res) => {
      console.log(res)
      this.setState({
        trip: res.data.updatedTrip,
        show: false
      })
    })
  }

  editTrip = () => {
    this.setState({
      show: true
    })
  }

  deleteTrip() {
    clientAuth.deleteTrip(this.props.tripId).then(res => {
      if(res.data.success) {
        this.props.history.push("/trips")
        this.props.onDeleteSuccess(this.props.tripId)
      }
    })
  }

  render() {
    const { trip } = this.state
    let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCbnxbyHE6NrhjozodTbi42aA_NXSRuHMs
    &origin=${this.state.trip.start}
    &destination=${this.state.trip.end}
    &mode=bicycling`
    return (
      <div className="container">
        <div className="trip-container">
          <h1>{trip.name}</h1>
          <h4>From: {trip.start}</h4>
          <h4>To: {trip.end}</h4>
          <h4>Distance: "from a to b" miles.</h4>
          <h4>Gas saved: "distance" * 1/23 gallons.</h4>
          <h4>Money saved: "gas saved * gas price" dollars.</h4>
          <h4>CO2 saved: "distance" * 411 grams.</h4>
          <h4>Calories burned: "distance" * 31 kcal</h4>
        </div>
        <div className="button-container">
          <button onClick={this.editTrip.bind(this)} className="btn btn-primary">Edit Trip</button>
          <button onClick={this.deleteTrip.bind(this)} className="btn btn-primary">Delete Trip</button>
        </div>
        <iframe width="800" height="650" frameBorder="0" style={{border:0}}
          src={url} allowFullScreen></iframe>
        <Map />
        {this.state.show && <EditTrip trip={trip} onSubmit={this.onSubmit} />}  
      </div>
    )
  }
}

export default TripDetail
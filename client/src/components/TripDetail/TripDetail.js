import React from 'react'
import axios from 'axios'
import EditTrip from '../EditTrip/EditTrip'
import Map from '../Map/Map.js'

class TripDetail extends React.Component {

  state = {
    show: false,
    trip: []
  }

  componentDidMount = () => {
    axios.get(`/trips/${this.props.tripId}`)
    .then((res) => {
      this.setState({
        trip: res.data
      })
    })
  }

  onSubmit = (fields) => {
    axios({method: 'patch', url: `/trips/${this.state.trip._id}`, data: fields})
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

  render() {
    const { trip } = this.state
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
          <button onClick={this.deleteTrip} className="btn btn-primary">Delete Trip</button>
        </div>
        <Map />
        {this.state.show && <EditTrip trip={trip} onSubmit={this.onSubmit} />}  
      </div>
    )
  }
}

export default TripDetail
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
        <h1>{trip.name}</h1>
        <h2>{trip.start}</h2>
        <h2>{trip.end}</h2>
        <Map />

        <button onClick={this.editTrip.bind(this)}>Edit Trip</button>
        <button onClick={this.deleteTrip}>Delete Trip</button>
        {this.state.show && <EditTrip trip={trip} onSubmit={this.onSubmit} />}

        
      </div>
    )
  }
}

export default TripDetail
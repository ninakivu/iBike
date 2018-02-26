import React from 'react'
import Axios from 'axios'

class TripDetail extends React.Component {


  render() {
    const { trip } = this.props
    return (
      <div className="container">
        <h1>{trip.name}</h1>
        <h2>{trip.start}</h2>
        <h2>{trip.end}</h2>

        <button onClick={this.editTrip}>Edit Trip</button>
        <button onClick={this.deleteTrip}>Delete Trip</button>
        
      </div>
    )
  }
}

export default TripDetail
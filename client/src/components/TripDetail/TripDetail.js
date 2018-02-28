import React from 'react'
import EditTrip from '../EditTrip/EditTrip'
import clientAuth from '../../clientAuth'


class TripDetail extends React.Component {

  state = {
    show: false,
    trip: null
  }

  componentDidMount = () => {
    clientAuth.getTripDetails(this.props.tripId).then((res) => {
      this.setState({
        trip: res.data
      })
    })
  }

  onTripUpdate = (updatedTrip) => {
    this.setState({
      trip: updatedTrip,
      show: false
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
    
    if(!trip) return <h1>Loading...</h1>
    
    let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCbnxbyHE6NrhjozodTbi42aA_NXSRuHMs
    &origin=${this.state.trip.start}
    &destination=${this.state.trip.end}
    &mode=bicycling`
    
    return (
      
      <div className="container">
        <div className="trip-container">
          {this.state.show
            ? (
              <EditTrip trip={trip} onUpdateTrip={this.onTripUpdate.bind(this)} />
            )
            : (
              <div>
                <h1>{trip.name}</h1>
                <h4>From: {trip.start}</h4>
                <h4>To: {trip.end}</h4>
                
                <div className="button-container">
                  <button onClick={this.editTrip.bind(this)} className="btn btn-primary">Edit Trip</button>
                  <button onClick={this.deleteTrip.bind(this)} className="btn btn-primary">Delete Trip</button>
                </div>
                <iframe width="800" height="650" frameBorder="0" style={{border:0}}
                  src={url} allowFullScreen title="map"></iframe>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default TripDetail
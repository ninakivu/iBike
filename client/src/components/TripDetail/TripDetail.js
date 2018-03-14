import React from 'react'
import EditTrip from '../EditTrip/EditTrip'
import clientAuth from '../../clientAuth'
import BikeCalc from '../BikeCalc/BikeCalc'

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
    &mode=${this.state.trip.mode}`
    
    return (
      
      <div>
        <div className="trip-container">
          {this.state.show
            ? (
              <EditTrip trip={trip} onUpdateTrip={this.onTripUpdate.bind(this)} />
            )
            : (
              <div className="center">
              <div className="jumbotron jumbotron-fluid white inline tripdetail" text="center">
                <h1>{trip.name}</h1>
                <h4><b>From: </b>{trip.start}</h4>
                <h4><b>To: </b>{trip.end}</h4>
                <h4><b>Mode: </b>{trip.mode}</h4>
                <BikeCalc />
    
                <div className="button-container">
                  <button onClick={this.editTrip.bind(this)} className="btn btn-primary">Edit Trip</button>
                  <button onClick={this.deleteTrip.bind(this)} className="btn btn-danger">Delete Trip</button>
                  <hr />
                </div>
              </div>
              
                <div className=" jumbotron jumbotron-fluid white inline">
                <iframe className="iframe" frameBorder="1" style={{border:0}}
                  src={url} title="map" allowFullScreen></iframe>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default TripDetail
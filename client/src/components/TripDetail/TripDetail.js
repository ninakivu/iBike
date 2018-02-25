import React from 'react'

class TripDetail extends React.Component {
  render() {
    const { trip } = this.props
    return (
      <div className="container">
        <h1>{trip.name}</h1>
        <h2>{trip.start}</h2>
        <h2>{trip.end}</h2>
        
      </div>
    )
  }
}

export default TripDetail
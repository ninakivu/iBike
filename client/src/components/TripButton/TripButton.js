import React from 'react'

class TripButton extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.onClick}>{this.props.label}</button>
    )
  }
}

export default TripButton
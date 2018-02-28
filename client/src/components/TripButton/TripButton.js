import React from 'react'

class TripButton extends React.Component {
  render() {
    return (

      <div className="jumbotron jumbotron-fluid" onClick={this.props.onClick} >
        <div className="container">
          <h1 className="display-4 jumbotron-text">{this.props.label}</h1>
          <p className="lead">You only have two homes: earth + your body. take care of them.</p>
        </div>
      </div>
    )
  }
}

export default TripButton
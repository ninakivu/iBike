import React from 'react'

class TripButton extends React.Component {
  render() {
    return (

      <div className="jumbotron jumbotron-fluid tripbtn" onClick={this.props.onClick} >
        <div className="container">
          <h1 className="display-4 jumbotron-text etched-text">{this.props.label}</h1>
          <h2 className="lead">You only have two homes: earth + your body. take care of them.</h2>
        </div>
      </div>
    )
  }
}

export default TripButton
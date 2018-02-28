import React from 'react'

class BikeCalc extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      distance: ''
    }
  }

  submitDistance(distance) {
    console.log(this)
    this.setState({
      distance: this.refs.distance.value
    })
  }
  

  render() {
    const { distance } = this.state
    return (
      <div>
        <h4>Distance: { distance } 
          <form onSubmit={this.submitDistance}<input type="text" className="input-sm" id="exampleInputDistance" ref="distance" defaultValue="0" onSubmit={this.submitDistance.bind(this)}/></form> miles.
        </h4>
        <h4>Gas saved: {{distance} * 1/23} gallons.</h4>
        <h4>Money saved: "gas saved * gas price" dollars.</h4>
        <h4>CO2 saved: "distance" * 411 grams.</h4>
        <h4>Calories burned: "distance" * 31 kcal</h4>
      </div>
    )
  }
}

export default BikeCalc



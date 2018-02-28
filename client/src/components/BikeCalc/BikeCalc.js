import React from 'react'

class BikeCalc extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      distance: 0,
      gas: 0,
      money: 0,
      CO2: 0,
      kcal: 0
    }
  }

  updateDistance(evt) {
    evt.preventDefault()
    console.log(this)
    this.setState({
      distance: Number(this.refs.distance.value),
      gas: Number(this.refs.distance.value) * 1/23,
      money: Number(this.refs.distance.value) * 0.1 ,
      CO2: Number(this.refs.distance.value) * 411,
      kcal: Number(this.refs.distance.value) * 31
    })
  }


  render() {
    const { distance, gas, money, CO2, kcal } = this.state
    return (
      <div>
          <form onSubmit={this.updateDistance.bind(this)}>
          <input type="text" className="form-control col-3" id="exampleInputDistance" ref="distance" placeholder="enter approx. distance"/>
        {this.updateDistance.bind(this)}</form> 
        <h4>Distance: { distance } miles</h4>
        <h4>Gas saved: {gas} gallons</h4>
        <h4>Money saved: ${money} </h4>
        <h4>CO2 saved: {CO2} grams</h4>
        <h4>Calories burned: {kcal} kcal</h4>
      </div>
    )
  }
}

export default BikeCalc



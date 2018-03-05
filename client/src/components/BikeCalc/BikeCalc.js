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
      gas: (Number(this.refs.distance.value) * 1/23).toFixed(2),
      money:( Number(this.refs.distance.value) * 0.1).toFixed(2) ,
      CO2: (Number(this.refs.distance.value) * 411).toFixed(2),
      kcal: (Number(this.refs.distance.value) * 31).toFixed(2)
    })
  }


  render() {
    const { distance, gas, money, CO2, kcal } = this.state
    return (
      <div>
          <form onSubmit={this.updateDistance.bind(this)}>
          <input type="text" className="form-control col-8" id="exampleInputDistance" ref="distance" placeholder="enter distance"/>
        {this.updateDistance.bind(this)}</form> 
        <h4><b>Distance: </b>{ distance } miles</h4>
        <h4><b>Gas saved: </b>{gas} gallons</h4>
        <h4><b>Money saved: </b>${money} </h4>
        <h4><b>CO2 saved: </b>{CO2} grams</h4>
        <h4><b>Calories burned: </b>{kcal} kcal</h4>
      </div>
    )
  }
}

export default BikeCalc



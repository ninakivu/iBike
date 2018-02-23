import React from 'react'

class NewTrip extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      start: '',
      end: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ 
      name: this.refs.name.value,
      start: this.refs.start.value,
      end: this.refs.end.value
    })
  }
  handleSubmit(event) {
    event.preventDefault() 

  }
  render() {
    return (
      <button> Start a new trip</button>

    )
  }
}



export default NewTrip
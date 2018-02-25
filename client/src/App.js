import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth.js'
import axios from 'axios'

import NavBar from './components/NavBar/NavBar.js'
import LogIn from './views/LogIn.jsx'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Home from './views/Home'

import UserDetail from './components/UserDetail/UserDetail.js'
import Users from './components/Users/Users.js'
import Trips from './components/Trips/Trips.js'
import AddTrip from './components/AddTrip/AddTrip.js'
import TripButton from './components/TripButton/TripButton.js'
import TripDetail from './components/TripDetail/TripDetail';

// App Component
class App extends Component {
  state = {
    loggedIn: true,
    users: [],
    trips: [],
    currentUser: null,
    showTripForm: false
  }

  componentDidMount = () => {
    this.setState({
      currentUser: clientAuth.getCurrentUser()
    })
    axios({method: 'get', url: '/users'})
    .then((res) => { 
      this.setState({
        users: res.data
      })
    })
    axios({method: 'get', url: '/trips'})
    .then((res) => { 
      this.setState({
        trips: res.data
       })
    })
  }

  onLoginSuccess = (user) => {
    this.setState({
      currentUser: clientAuth.getCurrentUser()
    })
  }

  logOut() {
    clientAuth.logOut() 
    this.setState({ currentUser: null })
  }
  
  addTrip(fields) {
    console.log("CREATING A TRIP")
    console.log(fields)
    axios({method: 'post', url: '/trips', data: fields})
      .then((res) => {
        console.log(res.data)
        var moreTrips = this.state.trips.slice() 
        moreTrips.push(res.data.trip)
        this.setState({
          trips: moreTrips
        })
      })
  }

  toggleTrip = () => {
    console.log("started to bike.")
    this.setState({
      showTripForm: !this.state.showTripForm
    })
  }

  render() {
    const { loggedIn, currentUser, users, trips, showTripForm } = this.state
    return (
      <div className="App container">
      
        <NavBar currentUser={ currentUser }/>
        
        {currentUser !== [] ? <TripButton label={showTripForm ? "Cancel Trip" : " New Trip"} onClick={this.toggleTrip.bind(this)} /> : null }

        { showTripForm ? <AddTrip onSubmit={this.addTrip.bind(this)} /> : null }
       
        <Switch>

          <Route path="/login" render={(props) => {
            return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)}/>
          }} />

          <Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

          <Route exact path="/users" render={() => {
            return <Users users={users} />
          }} />

          <Route exact path="/trips" render={(routeProps) => {
            return <Trips trips={trips} />
          }} />

          <Route exact path="/users/:id" render={(routeProps) => {
            const userId = routeProps.match.params.id
            const user = users.find((u) => {
              return u._id === userId
            })
            return <UserDetail user={user} />
          }} />

          <Route exact path="/trips/:id" render={(routeProps) => {
            const tripId = routeProps.match.params.id
            const trip = trips.find((t) => {
              return t._id === tripId
            })
            return <TripDetail trip={trip} />
          }} />

          <Route exact path="/" render={(routeProps) => {
            if(loggedIn) return <Redirect to  ="/users" />
            return <Redirect to="/login" />
          }} />
         
        </ Switch>



      </div>
    );
  }
}

export default App;

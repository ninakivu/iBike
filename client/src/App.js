import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

import NavBar from './components/NavBar/NavBar.js'
import UserDetail from './components/UserDetail/UserDetail.js'
import Users from './components/Users/Users.js'
import LoginForm from './components/LoginForm/LoginForm.js'
import Trips from './components/Trips/Trips.js'
import NewTrip from './components/NewTrip/NewTrip';

//test API call to the server:


// App Component
class App extends Component {
  state = {
    loggedIn: true,
    users: [],
    trips: [],
    currentUser: []
  }

  onLoginSuccess = (user) => {
    this.setState({
      currentUser: user
    })
  }

  componentDidMount = () => {
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

  render() {
    const { loggedIn, users, trips } = this.state
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to iBike</h1>
        </header>
        
 
        <NavBar currentUser={this.state.currentUser}/>
        <p className="App-intro">
          To get started, create a profile and start biking.
        </p>

        <NewTrip />

        <Switch>
          <Route exact path="/" render={(routeProps) => {
            if(loggedIn) return <Redirect to="/users" />
            return <Redirect to="/login" />
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

          <Route path="/login" render={() => {
            return <LoginForm onLoginSuccess={this.onLoginSuccess}/>
          }} />
        </ Switch>



      </div>
    );
  }
}

export default App;

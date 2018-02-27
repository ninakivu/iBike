import React from 'react'
import axios from 'axios'

class UserDetail extends React.Component {
  
  render() {
    const { user } = this.props
    return (
      <div>
      {user
        ? (
          <div>
            <h1>{user.name}</h1>
            <h3>E-mail: {user.email}</h3>
          </div>
        )
        : <h1>Loading...</h1>
      }
      <button className="btn btn-primary">Edit Profile</button>
      <button className="btn btn-danger">Delete Profile</button>

      <h3>My Trips: "user.trips.map"</h3>
      </div>
    )
  }
}

export default UserDetail
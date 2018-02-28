import React from 'react'
import clientAuth from '../../clientAuth'
import { Link } from 'react-router-dom'


class UserDetail extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    clientAuth.getUserDetails(this.props.userId).then(res => {
      this.setState({
        user: res.data
      })
    })
  }
  
  render() {
    const { user } = this.state
    if(!user) return <h1>Loading...</h1>
    return (
      <div>
        <div>
          <h1>{user.name}</h1>
          <h3>E-mail: {user.email}</h3>
        </div>
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-danger">Delete Profile</button>

        <h3>My Trips:</h3>
        <ul>{user.trips.map((t) => {
          return <li><Link to={`/trips/${t._id}`} className="btn btn-secondary">{t.name}</Link></li>
        })}
        </ul>
      </div>
    )
  }
}

export default UserDetail
import React from 'react'
import { Link } from 'react-router-dom'
import clientAuth from '../../clientAuth'

class Users extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    clientAuth.getUsers().then(res => {
      this.setState({
        users: res.data.reverse()
      })
    })
  }

  render() {
    const { users } = this.state
    return (
      <ul>
        {users.map((u) => {
          return (
            <div className="users" key={u._id} >
              <div className="profile-circle"></div>
              <p className="users-name"><Link to={`/users/${u._id}`}>{u.name}</Link></p>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default Users
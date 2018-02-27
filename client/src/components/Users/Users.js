import React from 'react'
import { Link } from 'react-router-dom'

class Users extends React.Component {
  render() {
    const { users } = this.props
    return (
      <ul>
        {users.map((u) => {
          return (
            <li className="users" key={u._id} >
              <p className="users-name"><Link to={`/users/${u._id}`}> {u.name} </Link></p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Users
import React from 'react'
import { Link } from 'react-router-dom'

class Users extends React.Component {
  render() {
    const { users } = this.props
    return (
      <ul>
        {users.map((u) => {
          return (
            <li key={u._id}>
              <Link to={`/users/${u._id}`}> {u.name} </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Users
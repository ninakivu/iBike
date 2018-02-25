import React from 'react'

class UserDetail extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div>
      {user
        ? (
          <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </div>
        )
        : <h1>Loading...</h1>
      }
      </div>
    )
  }
}

export default UserDetail
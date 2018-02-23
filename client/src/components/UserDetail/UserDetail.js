import React from 'react'

class UserDetail extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>{user.name}</h1>
      </div>
    )
  }
}

export default UserDetail
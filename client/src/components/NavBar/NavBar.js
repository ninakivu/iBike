import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    const { currentUser } = this.props
    return (
      <div className="navbar">
        <Link to={'/'} > Home </Link>
        <Link to={`/users/${currentUser && currentUser._id}`}> Profile </Link>
        <Link to={'/users'}> Users </Link>
        <Link to={'/trips'}> Trips </Link>
        {currentUser
          ? (
            <Link to={'/logout'}> Logout </Link>
          )
          : (
            <span>
              <Link to={'/login'}> Sign In </Link>
              <Link to={'/signup'}> Sign Up </Link>
            </span>
          )
        }
        
        
      </div>
    )
  }
}

export default NavBar
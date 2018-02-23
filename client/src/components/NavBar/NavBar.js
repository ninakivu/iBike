import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to={'/'} > Home </Link>
        <Link to={`/users/${this.props.currentUser && this.props.currentUser._id}`}> Profile </Link>
        <Link to={'/users'}> BikeLikers </Link>
        <Link to={'/trips'}> Trips </Link>
        <Link to={'/login'}> Sign In / Logout </Link>
        
        
      </div>
    )
  }
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {

    const { currentUser } = this.props
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="/">iBike</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={'/'} className="nav-link"> Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to={`/users/${currentUser && currentUser._id}`} className="nav-link">Profile </Link>
            </li>
            <li className="nav-item">
            <Link to={'/users'} className="nav-link">Users </Link>
            </li>
            <li className="nav-item">
              <Link to={'/trips'} className="nav-link">Trips</Link>
            </li>
            <div className="ml-auto">
              {currentUser
                ? (
                  <li className="nav-item">
                    <Link to={'/logout'} className="nav-link">Logout</Link>
                  </li>
                )
                : (
                  <span>
                    <Link to={'/login'} className="nav-link"> Sign In </Link>
                    <Link to={'/signup'} className="nav-link"> Sign Up </Link>
                  </span>
                )
              }
            </div>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
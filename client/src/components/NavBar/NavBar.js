import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { currentUser } = this.props
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="/">iBike</a>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
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
              <div className="ml-auto d-flex justify-content-end">
                {currentUser
                  ? (
                    <li className="nav-item">
                      <Link to={'/logout'} className="nav-link">Logout</Link>
                    </li>
                  )
                  : (
                    <span>
                      <Link to={'/login'} className="nav-link"> Log In </Link>
                      <Link to={'/signup'} className="nav-link"> Sign Up </Link>
                    </span>
                  )
                }
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
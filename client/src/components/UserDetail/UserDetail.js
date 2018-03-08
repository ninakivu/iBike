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
      <div className="tripsdiv">
        <div className="jumbotron jumbotron-fluid white inline">
          <h2>{user.name}</h2>
          <h4>E-mail: {user.email}</h4>
        </div>

        <div>
          <h3>Trips:</h3>
          {user.trips.map((t) => {
            return (
              <div className="card" key={t._id} style={{width: 22 +"em"}}>
                <div className="card-body"> 
                  <h5 className="card-title trip-name"><Link to={`/trips/${t._id}`}>{t.name} </Link></h5>
                  <p className="card-text">From: {t.start}</p>
                  <p className="card-text">To: {t.end}</p>
                  <Link to={`/trips/${t._id}`} className="btn btn-primary">More</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default UserDetail
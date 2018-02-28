import React from 'react'
import { Link } from 'react-router-dom'
import clientAuth from '../../clientAuth';

class Trips extends React.Component {
  constructor(props){
    super(props)
    console.log('the trips', props.trips)
  }

  state = {
    trips: []
  }

  componentDidMount() {
    clientAuth.getTrips().then(res => {
      this.setState({
        trips: res.data.reverse()
      })
    })
  }

  render() {
    const { trips } = this.state
    console.log(trips)
    return (
      <div>
        <ul>
          {trips.map((t) => {
            console.log(t)
            return (
              <div className="card" key={t._id} style={{width: 22 +"em"}}>
                <div className="card-body"> 
                  <h5 className="card-title trip-name"><Link to={`/trips/${t._id}`}>{t.name} </Link></h5>
                  <p className="card-text">By: <Link to={`/users/${t.by._id}`}>{t.by.name}</Link></p>
                  
                  <p className="card-text">From: {t.start}</p>
                  <p className="card-text">To: {t.end}</p>
                  <Link to={`/trips/${t._id}`} className="btn btn-primary">More</Link>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Trips
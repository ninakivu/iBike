import React from 'react'
import { Link } from 'react-router-dom'

class Trips extends React.Component {

  render() {
    const { trips } = this.props
    console.log(trips)
    return (
      <div>
        <ul>
          {trips.map((t) => {
            return (
              <div className="card" key={t._id} style={{width: 18 +"em"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body"> 
                  <h5 className="card-title"><Link to={`/trips/${t._id}`}>{t.name} </Link></h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to={`/trips/${t._id}`} className="btn btn-primary">{t.name}</Link>
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
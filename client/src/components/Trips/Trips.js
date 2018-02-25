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
              <li key={t._id}>
                <Link to={`/trips/${t._id}`}> {t.name} </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Trips
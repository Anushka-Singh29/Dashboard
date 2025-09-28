import React from 'react'
import { Link } from 'react-router-dom'


const Dashboards = () => {
  return (
    <div>
      Dashboard
      <br />
      <Link to='/products'> go to products
      </Link>
    </div>
  )
}

export default Dashboards

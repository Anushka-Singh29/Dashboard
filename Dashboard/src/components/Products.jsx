import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      This is products page.
      <br />
      <Link to='/'> go to Home/Dashboard
      </Link>
    </div> 
  )
}

export default Products

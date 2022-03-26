import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <li>
        <Link to='/'>Addjective</Link>
      </li>
      <li>
        <Link to='/tarina/1'>Tarina 1</Link>
      </li>
      <li>
        <Link to='/tarina/2'>Tarina 2</Link>
      </li>
      <li>
        <Link to='/tarina/3'>Tarina 3</Link>
      </li>
    </>
  )
}

export default Navbar

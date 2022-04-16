import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar--flexbox navbar--gradient'>
        <div>
          <li                  >
            <Link to='/' className='link--decoration link--decoration__white'>Addjective</Link>
          </li>
        </div>
        <div className='links--flexbox'>
          <li>
            <Link to='/tarina/1' className='link--decoration link--decoration__black'>Tarina 1</Link>
          </li>
          <li>
            <Link to='/tarina/2' className='link--decoration link--decoration__black'>Tarina 2</Link>
          </li>
          <li>
            <Link to='/tarina/3' className='link--decoration link--decoration__black'>Tarina 3</Link>
          </li>
        </div>
      </div>
    </>
  )
}

export default Navbar

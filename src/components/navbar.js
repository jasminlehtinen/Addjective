import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div>
          <li>
            <NavLink to='/' className='navbar__link navbar__link--big'>Addjective</NavLink>
          </li>
        </div>
        <div className='navbar__links'>
          <li>
            <NavLink
              to='/tarina/1' 
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--small navbar__link--underline' : 'navbar__link navbar__link--small'}
            >Tarina 1</NavLink>
          </li>
          <li>
            <NavLink 
              to='/tarina/2' 
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--small navbar__link--underline' : 'navbar__link navbar__link--small'}
            >Tarina 2</NavLink>
          </li>
          <li>
            <NavLink 
              to='/tarina/3' 
              className={({ isActive }) => isActive ? 'navbar__link navbar__link--small navbar__link--underline' : 'navbar__link navbar__link--small'}
            >Tarina 3</NavLink>
          </li>
        </div>
      </nav>
    </>
  )
}

export default Navbar

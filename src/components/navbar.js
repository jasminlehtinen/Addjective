import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar--flexbox navbar--background'>
        <div>
          <li>
            <NavLink to='/' className='link--decoration link--decoration__big'>Addjective</NavLink>
          </li>
        </div>
        <div className='links--flexbox'>
          <li>
            <NavLink
              to='/tarina/1' 
              className={({ isActive }) => isActive ? 'link--decoration link--decoration__small link--decoration__underline' : 'link--decoration link--decoration__small'}
            >Tarina 1</NavLink>
          </li>
          <li>
            <NavLink 
              to='/tarina/2' 
              className={({ isActive }) => isActive ? 'link--decoration link--decoration__small link--decoration__underline' : 'link--decoration link--decoration__small'}
            >Tarina 2</NavLink>
          </li>
          <li>
            <NavLink 
              to='/tarina/3' 
              className={({ isActive }) => isActive ? 'link--decoration link--decoration__small link--decoration__underline' : 'link--decoration link--decoration__small'}
            >Tarina 3</NavLink>
          </li>
        </div>
      </nav>
    </>
  )
}

export default Navbar

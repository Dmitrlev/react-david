import './nav.css';
import React from 'react'
import NavItem from './NavItem/NavItem'

const Nav = () => {
  return (
    <nav className='nav'>
      <NavItem path='/profile' name='profile'/>
      <NavItem path='/messages' name='messages'/>
      <NavItem path='/news' name='news'/>
      <NavItem path='/music' name='music'/>
      <NavItem path='/settings' name='settings'/>
    </nav>
    )
}

export default Nav; 

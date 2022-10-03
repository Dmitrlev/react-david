import React from 'react'
import './NavItem.css'
import {NavLink } from "react-router-dom"

const NavItem = (props) => {
    return(
        <NavLink to={props.path}>
          <div className='item'>
            <p>{props.name}</p>
          </div>
        </NavLink>
    )
} 

export default NavItem; 
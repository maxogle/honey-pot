import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="nav-bar">
            <NavLink className="nav-link" to="/Home">Home</NavLink>
            <NavLink className="nav-link" to="/UserPosts">Community</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar
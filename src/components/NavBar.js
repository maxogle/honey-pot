import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav >
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/UserPosts">Community</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar
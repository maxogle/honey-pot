import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <div>
                <nav className="nav-bar">
                    <NavLink className="nav-link" to="/Home">
                        <img className="home-button" src="./Pot2logo.png" alt="HoneyPotLogo" />
                    </NavLink>
                    <NavLink className="nav-link" to="/UserPosts">Community</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </nav>
            </div>
            <div>
                <img className="" />
            </div>
        </div>
    )
}

export default NavBar
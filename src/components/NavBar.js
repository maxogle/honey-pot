import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <div>
                <nav className="nav-bar">
                    <NavLink className="nav-link" to="/">
                        <img className="home-button" src="./Pot2logo.png" alt="HoneyPotLogo" />
                    </NavLink>
                    <NavLink className="nav-link" to="/UserPosts">
                        <img className="home-button" src="./Community.png" alt='community-button'/>
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        <img className="home-button" src="./ABOUT.png" alt="About-button" />
                    </NavLink>
                </nav>
            </div>
            <div>
                <img className="" />
            </div>
        </div>
    )
}

export default NavBar;
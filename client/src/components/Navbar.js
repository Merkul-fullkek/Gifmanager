import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper purple darken-3" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Gif Manager</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/upload">Create</NavLink></li>
                    <li><NavLink to="/gifs">Gifs</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}
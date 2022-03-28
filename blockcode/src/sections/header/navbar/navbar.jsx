import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav, NavContainer, NavLink } from './style'

function Navbar() {

    const { pathname } = useLocation()

    return (
        <NavContainer>
            <Nav>
                <NavLink active={pathname == "/home" ? true : false}><Link to={'/home'}>Home</Link></NavLink>
                <NavLink active={pathname == "/posts" ? true : false}><Link to={'/posts'}>Posts</Link></NavLink>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav, NavContainer, NavLink } from './style'

function Navbar( { setMenuStatus, active } ) {

    const { pathname } = useLocation()

    return (
        <NavContainer active={active}>
            <Nav>
                <NavLink onClick={() => setMenuStatus(false)} active={pathname == "/home" ? true : false}><Link to={'/home'}>Home</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} active={pathname == "/posts" ? true : false}><Link to={'/posts'}>Posts</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} active={pathname == "/posts" ? true : false}><Link to={'/posts'}>Posts</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} active={pathname == "/posts" ? true : false}><Link to={'/posts'}>Posts</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} active={pathname == "/posts" ? true : false}><Link to={'/posts'}>Posts</Link></NavLink>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
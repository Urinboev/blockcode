import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav, NavContainer, NavLink } from './style'

function Navbar( { setMenuStatus, active } ) {

    const { pathname } = useLocation()

    return (
        <NavContainer active={active}>
            <Nav>
                <NavLink onClick={() => setMenuStatus(false)} color='#4353ff' active={pathname == "/" ? true : false}><Link to={'/'}>Home</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} color='#3A3845' active={pathname == "/tutorials" ? true : false}><Link to={'/tutorials'}>Tutorials</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} color='#65C18C' active={pathname == "/books" ? true : false}><Link to={'/books'}>Books</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} color='#ED5EDD' active={pathname == "/videos" ? true : false}><Link to={'/videos'}>Videos</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} color='#9C51E0' active={pathname == "/forum" ? true : false}><Link to={'/forum'}>Forum</Link></NavLink>
                <NavLink onClick={() => setMenuStatus(false)} color='#FFC900' active={pathname == "/articles" ? true : false}><Link to={'/articles'}>Articles</Link></NavLink>
            </Nav>
        </NavContainer>
    )
}

export default Navbar
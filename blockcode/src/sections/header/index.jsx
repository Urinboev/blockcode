import React, { useState } from 'react'
import Navbar from './navbar'
import SearchBar from './searchBar'
import { HeaderContainer, Logo, MenuIcon } from './style'

function Header() {

    const [menuStatus, setMenuStatus] = useState(false)
    return (
        <HeaderContainer active={menuStatus}>
            <Logo>
                <span>&lt;</span>BlockCode<span>&gt;</span>
            </Logo>

            <Navbar setMenuStatus = {setMenuStatus} active={menuStatus} />

            <SearchBar active={menuStatus} />

            <MenuIcon onClick={() => {
                menuStatus ? setMenuStatus(false) : setMenuStatus(true)
                console.log(menuStatus)
            }}>
                <span></span><span></span><span></span>
            </MenuIcon>
        </HeaderContainer>
    )
}

export default Header
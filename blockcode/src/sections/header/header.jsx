import React from 'react'
import Navbar from './navbar/navbar'
import { HeaderContainer, Logo } from './style'

function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <span>&lt;</span>BlockCode<span>&gt;</span>
            </Logo>

            <Navbar />
        </HeaderContainer>
    )
}

export default Header
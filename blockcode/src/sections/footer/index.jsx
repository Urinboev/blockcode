import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Btn, Container, FooterLogo, FooterNav, Form, Input, Nav, Newsletter, Section1, Section2, SocialLink, SocialNav } from './style'

function Footer() {
    return (
        <Container>
            <Section1>
                <Newsletter>
                    <h1>Join Our Newsletter</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quam dicta laboriosam voluptatum dolorem ullam numquam</p>
                    <Form>                        
                        <Input placeholder='Enter your email address' />
                        <Btn>Subscribe</Btn>
                    </Form>
                </Newsletter>

                <Box>
                    <h1>Watch Us</h1>
                    <p>Our social media accounts</p>
                    <SocialNav>
                        <li><SocialLink color='#f78f9f' href='#'><i className="bi bi-youtube"></i></SocialLink></li>
                        <li><SocialLink color='#f719ff' href='#'><i className="bi bi-telegram"></i></SocialLink></li>
                        <li><SocialLink color='#178f9f' href='#'><i className="bi bi-instagram"></i></SocialLink></li>
                        <li><SocialLink color='#112f9f' href='#'><i className="bi bi-facebook"></i></SocialLink></li>
                    </SocialNav>
                </Box>
            </Section1>
            <Section2>
                <FooterLogo href='/'>
                    <span>&lt;</span>BlockCode<span>&gt;</span>
                </FooterLogo>

                <FooterNav>
                    <Nav>
                        <h2>Trending</h2>
                        <ul>
                            <li><Link to={'/'}>React</Link></li>
                            <li><Link to={'/'}>JavaScript</Link></li>
                            <li><Link to={'/'}>Solidity</Link></li>
                            <li><Link to={'/'}>Web3.Js</Link></li>
                        </ul>
                    </Nav>

                    <Nav>
                        <h2>Info</h2>
                        <ul>
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/'}>Hire</Link></li>
                            <li><Link to={'/'}>Contact</Link></li>
                        </ul>
                    </Nav>
                </FooterNav>
            </Section2>
        </Container>
    )
}

export default Footer
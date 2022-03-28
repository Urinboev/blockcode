import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transition: .5s ease;

    @media (max-width: 800px){
        flex-direction: column-reverse;
        height: ${props => props.active ? "100vh" : "40px"};
    }
`

export const Logo = styled.a`
    font-family: Arciform;
    font-size: 25px;
    color: #4353FF;
    span{
        font-weight: 900;
        color: #151c69;
    }

    @media (max-width: 800px){
        position: absolute;
        top: 20px;
        left: 50px;
    }
`

export const MenuIcon = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 35px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    span{
        display: block;
        width: 100%;
        height: 5px;
        border-radius: 2px;
        background-color: #4353ff;
    }

    @media (max-width: 800px) {
        display: flex;
        position: absolute;
        top: 20px;
        right: 50px;
    }
`
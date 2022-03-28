import styled from 'styled-components'

export const NavContainer = styled.div`
    margin: 0 50px;

    @media (max-width: 800px){
        display: ${props => props.active ? "block" : "none"};
        ul{
            flex-direction: column;
            align-items: center;
        }
        ul li {
            margin: 10px 0;
        }
    }
`

export const Nav = styled.ul`
    display: flex;
`

export const NavLink = styled.li`
    margin: 0 5px;
    a{
        padding: 2px 10px 4px 10px;
        border-radius: 5px;
        font-size: 16px;
        background-color: ${props => props.active ? "#4353ff44" : "transparent"};
        color: #4353ff;
    }
    a:hover{
        background: #4353ff44;
    }

    @media (max-width: 800px){
        a{
            font-size: 25px;
        }
    }
`
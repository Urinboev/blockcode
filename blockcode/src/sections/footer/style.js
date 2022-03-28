import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px 0;
    display: grid;
    place-items: center;
`

export const Section1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9da5ff21;
    width: 100%;
    padding: 50px 0;

    h1{
        color: #171C2F;
        font-size: 30px;
    }
    p{
        font-size: 14px;
        color: #8d8d8d;
        margin: 10px 0 40px 0;
    }
`

export const Newsletter = styled.div`
    padding: 20px;
    max-width: 500px;
`

export const Form = styled.form`
    width: 400px;
    height: 40px;
    display: flex;
`

export const Input = styled.input`
    width: 70%;
    border: 1px solid #9da5ff9f;
    border-radius: 5px;
    background-color: #fff;
    padding-left: 15px;
    margin-right: 5px;

    :placeholder{
        color: #9da5ff9f;
    }
`

export const Btn = styled.button`
    width: 30%;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    border: none;
    background-color: #4353ff;
    color: #fff;
    cursor: pointer;

    :hover{
        background-color: #1333ff;
    }
`

export const Box = styled.div`
    p{
        margin-bottom: 10px;
    }
`

export const SocialNav = styled.ul`
    display: flex;

    li{
        margin: 10px;
    }
`

export const SocialLink = styled.a`
    font-size: 30px;
    color: ${props => props.color + '99'};
    transition: .3s;

    :hover{
        color: ${props => props.color};
    }
`

export const Section2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`

export const FooterLogo = styled.a`
    font-family: Arciform;
    font-size: 40px;
    color: #4353FF;
    margin-right: 50px;
    span{
        font-weight: 900;
        color: #151c69;
    }
`

export const FooterNav = styled.div`
    display: flex;
    align-items: start;
`

export const Nav = styled.div`
    margin: 0 20px;
    h2{
        color: #171C2F;
    }
    a{
        color: #8d8d8d;
        transition: .3s;
    }
    a:hover{
        color: #4353ff;
    }
`
import styled from 'styled-components'

export const Container = styled.div`
    // height: 60vh;
    margin: 300px 0;
    text-align: center;

    // display: flex;
    // place-items: center;
`

export const Logo = styled.a`
    font-family: Arciform;
    font-size: 100px;
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
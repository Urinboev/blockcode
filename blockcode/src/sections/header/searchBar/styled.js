import styled from 'styled-components'

export const Container = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    border: #4353ff 1px solid;
    border-radius: 7px;

    @media (max-width: 800px){
        display: ${props => props.active ? "flex" : "none"};
        margin-bottom: 20px;
    }
`

export const Input = styled.input`
    width: 100%;
    font-size: 14px;
    padding: 8px 10px;
    border: none;
    background: transparent;

    ::placeholder{
        color: #4353ffaa;
    }
    color: #4353ff;
`

export const IconBtn = styled.span`
    display: block;
    margin: -2px 0 0 10px;
    color: #4353ff;
`
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`

export const PostsRow = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: auto auto auto;

    @media (max-width: 1000px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 500px) {
        grid-template-columns: auto;
    }
`

export const Headline = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
    color: ${props => props.color};
`

export const Categories = styled.div`
    padding: 100px 0;
    text-align: center;
    width: 70%;
    h1{
        color: #8d8d8d;
        font-size: 25px;
        margin-bottom: 10px;
    }
    border-top: 2px solid #8d8d8d;
    margin-top: 20px;
`

export const CategoryBtn = styled.a`
    display: inline-block;
    color: ${props => props.color};
    background-color: ${props => props.color + '35'};
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 5px;
    margin: 5px;
    transition: .3s;

    :hover{
        color: #fff;
        background-color: ${props => props.color};
    }
`
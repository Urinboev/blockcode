import styled from 'styled-components'

export const PostContainer = styled.div`
    display: flex;
    width: 360px;
    flex-direction: column;
    margin: 0 20px 30px 0;

    @media (max-width: 1200px) {
        width: 300px;
    }
    @media (max-width: 700px) {
        width: 240px;
    }
    @media (max-width: 500px) {
        width: 90%;
        flex-direction: row;
        margin: 0 0 30px 0;
    }
`

export const PostImage = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 500px) {
        width: 40%;
    }
`

export const PostBody = styled.div`
    margin: 10px;
`

export const Category = styled.a`
    color: #${props => props.color};
    background-color: #${props => props.color + '35'};
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 5px;

    
    @media (max-width: 700px) {
        font-size: 12px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
    }
`

export const Title = styled.h1`
    font-size: 28px;
    margin: 10px 0;
    a{
        color: #171C2F;
        transition: .3s;
    }
    a:hover{
        color: #4353ff;
    }

    @media (max-width: 700px) {
        font-size: 20px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

export const Body = styled.p`
    font-size: 14px;
    color: #8d8d8d;

    @media (max-width: 700px) {
        font-size: 11px;
    }
    @media (max-width: 500px) {
        font-size: 10px;
    }
`

export const Author = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    img{
        width: 35px;
        height: 35px;
        border-radius: 10px;
    }
    div{
        margin: -10px 0 0 10px;
    }
    h2 a{
        font-size: 14px;
        color: #171C2F;
    }
    p{
        font-size: 10px;
        color: #8d8d8d;
    }

    @media (max-width: 700px) {
        img{
            width: 25px;
            height: 25px;
            border-radius: 10px;
        }
        h2 a{
            font-size: 14px;
        }
        p{
            font-size: 10px;
        }
    }
    @media (max-width: 500px) {
        h2 a{
            font-size: 12px;
        }
        p{
            font-size: 10px;
        }
    }
`
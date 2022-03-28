import styled from 'styled-components'

export const PostContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Post = styled.div`
    display: flex;
    width: 60%;

    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const PostImage = styled.img`
    width: 50%;
    border-radius: 20px;
    // object-fit: cover;
    @media (max-width: 770px) {
        width: 40%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const PostBody = styled.div`
    margin: 20px 0 20px 20px;
`

export const Category = styled.a`
    color: #${props => props.color};
    background-color: #${props => props.color + '35'};
    font-size: 18px;
    padding: 5px 15px;
    border-radius: 5px;
`

export const Title = styled.h1`
    font-size: 30px;
    margin: 10px 0;
    a{
        color: #171C2F;
        transition: .3s;
    }
    a:hover{
        color: #4353ff;
    }

    @media (max-width: 770px) {
        font-size: 25px;
    }
`

export const Body = styled.p`
    font-size: 14px;
    color: #8d8d8d;

    @media (max-width: 770px) {
        font-size: 12px;
    }
`

export const Author = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    img{
        width: 50px;
        height: 50px;
        border-radius: 15px;
    }
    div{
        margin: -5px 0 0 10px;
    }
    h2 a{
        font-size: 18px;
        color: #171C2F;
    }
    p{
        font-size: 14px;
        color: #8d8d8d;
    }

    @media (max-width: 770px) {
        img{
            width: 40px;
            height: 40px;
            border-radius: 12px;
        }
        h2 a{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
    }
`
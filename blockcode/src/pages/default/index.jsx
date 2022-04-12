import React from 'react'
import { Container, Msg, Title } from './style'

function Default() {
    return (
        <Container>
            <Title>Oops...</Title>
            <Msg>Sorry! No available contents here. Go <a href='#'>Home</a></Msg>
        </Container>
    )
}

export default Default
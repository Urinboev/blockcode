import React from 'react'
import { Container, IconBtn, Input } from './styled'
import 'bootstrap-icons/font/bootstrap-icons.css'

function SearchBar( { active } ) {
    return (
        <Container active={active}>
            <IconBtn><i className="bi bi-search"></i></IconBtn>
            <Input placeholder={"Search something"} />
        </Container>
    )
}

export default SearchBar
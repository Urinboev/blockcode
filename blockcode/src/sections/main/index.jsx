import { Route, Routes } from 'react-router-dom'
import { MainContainer } from './style'
import Home from '../../pages/home'

function Main() {
    return (
        <MainContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Home />} />
            </Routes>
        </MainContainer>
    )
}

export default Main
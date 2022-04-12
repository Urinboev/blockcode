import { Route, Routes } from 'react-router-dom'
import { MainContainer } from './style'
import Home from '../../pages/home'
import Default from '../../pages/default'
import Articles from '../../pages/articles'

function Main() {

    const navItems = ['/tutorials', '/books', '/videos', '/forum']
    return (
        <MainContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                {
                    navItems.map(item => 
                        <Route path={`/${item}`} element={<Default />} />
                    )
                }
            </Routes>
        </MainContainer>
    )
}

export default Main
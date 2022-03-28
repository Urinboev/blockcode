import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';
import Header from './sections/header';
import Main from './sections/main';

const AppContainer = styled.div`
    width: 100%;
    position: relative;
`

function App() {
    return (
        <BrowserRouter>
            <AppContainer>
                {/* header */}
                <Header />
                {/* main */}
                <Main />
                {/* footer */}
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;

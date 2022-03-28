import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components'
import './App.css';
import CustomRoutes from './CustomRoutes';
import Header from './sections/header/header';

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
                
                <CustomRoutes />
                {/* footer */}
            </AppContainer>
        </BrowserRouter>
    );
}

export default App;

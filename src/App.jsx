import React from 'react';
import { styled } from 'styled-components';

import { Normalize, GlobalStyle } from "./components/global/styles/styles.jsx";
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';

const Wrapper = styled.div`
    background-image: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

    width: 100%;
    min-height: 100vh;
`;

const Hero = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 3rem;
`;

const Banner = styled.div`
    background-image: url("/images/backgrounds/banner.png");
    background-size: cover;

    border-radius: 10px;
    padding: 5rem 4rem;

    h1 {
        max-width: 20rem;

        color: white;
        font-family: "GandhiSans Regular";
        font-size: 2.5rem;
        font-weight: normal;

        line-height: 1.5;
    }
`;

function App() {
    return (
        <Wrapper>
            <Normalize />
            <GlobalStyle />

            <Header />

            <Hero>
                <SideBar />
                
                <Banner>
                    <h1>The most complete gallery in space!</h1>
                </Banner>
            </Hero>
        </Wrapper>
    )
}

export default App

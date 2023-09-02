import React, { useState } from 'react';
import { styled } from 'styled-components';

import { Normalize, GlobalStyle } from "./components/global/styles/styles.jsx";
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Tags from './components/Gallery/Tags/Tags.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Popular from './components/Popular/Popular.jsx';

import photos from "./components/Gallery/photos.json";

const Wrapper = styled.div`
    background-image: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

    width: 100%;
    min-height: 100vh;
`;

const Main = styled.main`
    max-width: 87.5rem;

    margin: auto;
    padding: 1rem;
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

const PhotosSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 15rem;
    gap: 1.5rem;
`;

const App = () => {
    const [galleryPhotos, setGalleryPhotos] = useState(photos);

    return (
        <Wrapper>
            <Normalize />
            <GlobalStyle />

            <Main>
                <Header />

                <Hero>
                    <SideBar />
                
                    <div>
                        <Banner>
                            <h1>The most complete gallery in space!</h1>
                        </Banner>

                        <Tags />

                        <PhotosSection>
                            <Gallery photos={galleryPhotos} />

                            <Popular />
                        </PhotosSection>
                    </div>
                </Hero>
            </Main>
        </Wrapper>
    )
}

export default App;

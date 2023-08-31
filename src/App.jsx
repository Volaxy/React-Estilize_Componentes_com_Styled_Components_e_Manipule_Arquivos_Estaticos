import React from 'react';
import { styled } from 'styled-components';

import Normalize from "./components/global/styles/styles.jsx";

// Cada styled component devera seguir o padrão "styled" seguido de "." e nome da tag que será utilizada, e dentro das `` deverá conter os estilos escritos em JS-IN-CSS, explicação em "/01 - CSS-in-JS e SCSS.md"
const Wrapper = styled.div`
    background-image: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

    width: 100%;
    min-height: 100vh;
`;

function App() {
    return (
        <Wrapper>
            <Normalize />
        </Wrapper>
    )
}

export default App

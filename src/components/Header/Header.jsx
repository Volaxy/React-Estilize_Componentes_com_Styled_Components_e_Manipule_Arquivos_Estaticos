import React from "react";
import { styled } from "styled-components";
import InputField from "../InputField/InputField";

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    
    padding: 4rem 0;

    img {
        max-width: 12rem;
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <img src="/images/logo.png" alt="Logotype of the SpaceX" />

            <InputField />
        </HeaderStyle>
    );
}

export default Header;
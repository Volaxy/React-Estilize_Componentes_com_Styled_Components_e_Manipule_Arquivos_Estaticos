import React from "react";
import { styled } from "styled-components";

import MagnifyingGlassIcon from "./assets/images/magnifying-glass.svg";

const InputFieldStyle = styled.input`
    background-color: transparent;
    background-image: url(${MagnifyingGlassIcon});
    background-repeat: no-repeat;
    background-position: bottom 1rem right 1rem;

    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 0.75rem 4rem 0.75rem 1rem;

    color: #D9D9D9;
    
    &::placeholder {
        color: #D9D9D9;
    }
`;

const InputField = () => {
    return (
        <InputFieldStyle placeholder="What are you looking for?" />
    );
};

export default InputField;

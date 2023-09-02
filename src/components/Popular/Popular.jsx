import React from 'react';
import { styled } from 'styled-components';

const PopularTitle = styled.h2`
    color: #7B78E5;
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
`;

const Popular = () => {
    return (
        <>
            <PopularTitle>Popular</PopularTitle>
        </>
    );
};

export default Popular;
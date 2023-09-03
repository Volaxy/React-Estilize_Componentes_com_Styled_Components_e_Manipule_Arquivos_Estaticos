import React from 'react';
import { styled } from 'styled-components';

const PopularTitle = styled.h2`
    color: #7B78E5;
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
`;

const PhotosWraper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Photo = styled.img`
    border-radius: 10px;
`;

const ViewMoreButton = styled.button`
    background-color: transparent;

    border: 2px solid #C98CF1;
    border-radius: 10px;
    padding: 1rem;

    color: white;

    cursor: pointer;
    transition: 0.25s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const Popular = ({ photos = [] }) => {
    return (
        <aside>
            <PopularTitle>Popular</PopularTitle>

            <PhotosWraper>
                {photos.map(photo => <Photo key={photo.id} src={photo.path} alt="" />)}

                <ViewMoreButton>View More</ViewMoreButton>
            </PhotosWraper>
        </aside>
    );
};

export default Popular;
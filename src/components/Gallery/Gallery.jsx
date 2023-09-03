import React from 'react';
import { styled } from 'styled-components';
import Photo from './Photo/Photo';

const GalleryTitle = styled.h2`
    color: #7B78E5;
    font-size: 2rem;
    font-weight: normal;
`;

const GalleryPhotos = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    padding: 0;

    list-style: none;
`;

const GalleryItem = styled.li`
    border-radius: 10px;
    box-shadow: 0 0 3px #0000007f;

    overflow: hidden;
`;

const Gallery = ({ photos = [], onExpandPhoto }) => {
    return (
        <section>
            <GalleryTitle>Browse the gallery</GalleryTitle>

            <GalleryPhotos>
                {photos.map(photo => {
                    return (
                        <GalleryItem key={photo.id}>
                            <Photo photo={photo} isExpandedPhoto={false} onExpandPhoto={onExpandPhoto} />
                        </GalleryItem>
                    );
                })}
            </GalleryPhotos>
        </section>
    );
};

export default Gallery;
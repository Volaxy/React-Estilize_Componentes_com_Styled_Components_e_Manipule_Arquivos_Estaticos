import React from 'react';
import { styled } from 'styled-components';

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

    figure {
        display: grid;
        grid-template-rows: 1fr auto;

        margin: 0;

        img {
            width: 100%;

            object-fit: cover;
        }
        
        figcaption {
            background: #001634;

            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            padding: 1rem;
            box-sizing: border-box;

            color: #FFF;

            h3 {
                margin: 0;

                font-size: 1.5rem;

                .photoSource {
                    font-size: 0.75em;
                    font-weight: normal;
                }
            }

            .buttons {
                display: flex;
                gap: 1.5rem;

                button {
                    background-color: unset;
    
                    border: none;
    
                    cursor: pointer;
                }
            }

        }
    }
`;

const Gallery = ({ photos = [] }) => {
    return (
        <section>
            <GalleryTitle>Browse the gallery</GalleryTitle>

            <GalleryPhotos>
                {photos.map(photo => {
                    return (
                        <GalleryItem key={photo.id}>
                            <figure>
                                <img src={photo.path} alt="" />

                                <figcaption>
                                    <h3>
                                        {photo.title}<br />
                                        <span className="photoSource">{photo.source}</span>
                                    </h3>

                                    <div className="buttons">
                                        <button><img src="/images/icons/favorite.png" alt="Favorite Icon" /></button>
                                        <button><img src="/images/icons/expand.png" alt="Expand Icon" /></button>
                                    </div>
                                </figcaption>
                            </figure>
                        </GalleryItem>
                    );
                })}
            </GalleryPhotos>
        </section>
    );
};

export default Gallery;
import React from 'react';
import { styled } from 'styled-components';

import tags from "../Tags/tags.json";

const PhotoStyle = styled.figure`
    display: grid;
    grid-template-rows: 1fr auto;

    position: relative;

    margin: 0;

    img {
        width: 100%;

        object-fit: cover;
    }

    .tag {
        background-color: rgba(77, 77, 77, 0.37);
        
        position: absolute;
        top: 1rem;
        right: 1rem;

        border-radius: 10px;
        padding: 0.5rem 1rem;

        color: white;
        font-size: 1.25rem;
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
`;

const Photo = ({ photo, isExpandedPhoto, onFavoritePhoto, onExpandPhoto }) => {
    return (
        <PhotoStyle>
            <img src={photo.path} alt="" />

            <div className="tag">{tags.find(tag => tag.id === photo.tagId)?.title}</div>

            <figcaption>
                <h3>
                    {photo.title}<br />
                    <span className="photoSource">{photo.source}</span>
                </h3>

                <div className="buttons">
                    <button onClick={() => onFavoritePhoto(photo)}><img src={`/images/icons/${photo.isFavorite ? "favorite-active" : "favorite"}.png`} alt="Favorite Icon" /></button>
                    {!isExpandedPhoto &&
                        <button onClick={() => onExpandPhoto(photo)}><img src="/images/icons/expand.png" alt="Expand Icon" /></button>
                    }
                </div>
            </figcaption>
        </PhotoStyle>
    );
};

export default Photo;
import React from 'react';

import tags from "./tags.json";
import { styled } from 'styled-components';

const TagsStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    color: white;
    font-size: 1.5rem;
`;

const TagsWraper = styled.div`
    margin-left: 1rem;
`;

const TagButton = styled.button`
    background-color: rgba(217, 217, 217, 0.30);

    min-width: 5rem;

    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1rem 0.5rem;
    box-sizing: border-box;

    color: #FFF;
    font-size: 1.5rem;

    cursor: pointer;
    transition: 0.25s;

    &:not(:first-child) {
        margin-left: 1rem;
    }

    &:hover {
        border: 2px solid #C98CF1;
    }
`;

const Tags = ({ onSelectTag }) => {
    return (
        <TagsStyle>
            <p>Search for tags:</p>

            <TagsWraper>
                {tags.map(tag => {
                    return (
                        <TagButton
                            key={tag.id}
                            onClick={() => onSelectTag(tag)}
                        >
                            {tag.title}
                        </TagButton>
                    )
                })}
            </TagsWraper>
        </TagsStyle>
    );
};

export default Tags;
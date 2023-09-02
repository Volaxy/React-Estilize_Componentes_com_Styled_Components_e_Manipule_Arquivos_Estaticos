import React from 'react';
import { styled } from 'styled-components';

const ItemStyle = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 1rem;

    cursor: pointer;

    a {
        color: ${props => props.$isCurrentPage ? "#7b78e5" : "#d9d9d9"};
        font-family: ${props => props.$isCurrentPage ? "GandhiSans Bold" : "GandhiSans Regular"};
        text-decoration: none;
    }
`;

const Item = ({iconPath, activeIconPath, textContent, isCurrentPage}) => {
    return (
        <ItemStyle $isCurrentPage={isCurrentPage}>
            <img src={isCurrentPage ? activeIconPath : iconPath} alt="" />

            <a href="#">{textContent}</a>
        </ItemStyle>
    );
};

export default Item;
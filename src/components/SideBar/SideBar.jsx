import React from 'react';
import { styled } from 'styled-components';
import Item from './Item/Item';

const ListStyle = styled.ul`
    margin: 0;
    padding: 0;
    
    list-style: none;
`;

const listItens = [
    {
        textContent: "Index",
        iconPath: "/images/icons/home.png",
        activeIconPath: "/images/icons/home-active.png",
        isCurrentPage: true
    },
    {
        textContent: "Most Views",
        iconPath: "/images/icons/most-views.png",
        activeIconPath: "/images/icons/most-views-active.png",
        isCurrentPage: false
    },
    {
        textContent: "More Likes",
        iconPath: "/images/icons/more-likes.png",
        activeIconPath: "/images/icons/more-likes-active.png",
        isCurrentPage: false
    },
    {
        textContent: "News",
        iconPath: "/images/icons/news.png",
        activeIconPath: "/images/icons/news-active.png",
        isCurrentPage: false
    },
    {
        textContent: "Surprise me",
        iconPath: "/images/icons/surprise-me.png",
        activeIconPath: "/images/icons/surprise-me-active.png",
        isCurrentPage: false
    }
];

const SideBar = () => {
    return (
        <nav>
            <ListStyle>
                {
                    listItens.map(listItem => {
                        return (
                            <Item
                                key={listItem.textContent}
                                iconPath={listItem.iconPath}
                                activeIconPath={listItem.activeIconPath}
                                textContent={listItem.textContent}
                                isCurrentPage={listItem.isCurrentPage}
                            />
                        );
                    })
                }
            </ListStyle>
        </nav>
    );
};

export default SideBar;
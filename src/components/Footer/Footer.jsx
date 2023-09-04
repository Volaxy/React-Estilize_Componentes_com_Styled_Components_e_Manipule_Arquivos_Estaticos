import React from 'react';
import { styled } from 'styled-components';

import FacebookIcon from "/images/icons/facebook.svg";
import InstagramIcon from "/images/icons/instagram.svg";
import TwitterIcon from "/images/icons/twitter.svg";

const FooterStyle = styled.footer`
    background: #04244F;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.5rem 2.5rem;
`;

const Icons = styled.div`
    display: flex;
    gap: 2rem;
`;

const Author = styled.p`
    color: #FFF;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <Icons>
                <a href="#"><img src={FacebookIcon} alt="Facebook Logo" /></a>
                <a href="#"><img src={TwitterIcon} alt="Twitter Logo" /></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram Logo" /></a>
            </Icons>

            <Author>Development by Gustavo Martins pereira</Author>
        </FooterStyle>
    );
};

export default Footer;
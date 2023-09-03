import React from 'react';
import Photo from '../Gallery/Photo/Photo';
import { styled } from 'styled-components';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogStyle = styled.dialog`
    background-color: transparent;
    
    width: 60%;
    min-height: 30rem;
    height: fit-content;

    position: fixed;
    top: 10%;

    border: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px black;
    padding: 0;

    overflow: hidden;

    .close-button {
        background-color: transparent;

        position: absolute;
        top: 1rem;
        right: 1rem;

        border: none;

        cursor: pointer;
    }
`;

const Dialog = ({ selectPhoto }) => {
    return (
        <>
            {selectPhoto && 
                <>
                    <Overlay />

                    <DialogStyle open={!!selectPhoto}>
                        <Photo photo={selectPhoto} isExpandedPhoto={true} />
                        
                        <form method="dialog">
                            <button className="close-button"><img src="/images/icons/close.png" alt="Close Icon" /></button>
                        </form>
                    </DialogStyle>
                </>
            }
        </>
    );
};

export default Dialog;
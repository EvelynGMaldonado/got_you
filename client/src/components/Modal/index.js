import React, {useRef, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import {MdClose} from 'react-icons/md';
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'


const Modal = ({showModal, setShowModal}) =>{


    return (
        <>
        {showModal ? (
            <div id="modal-background">
                <div id="modal-wrapper">
                    <div id="modal-content">
                        <h1>About the devs</h1>
                            <h3>Evelyn Madonado</h3>
                            <p>Some text</p>
                            <h3>Jorge Barrag&aacute;n</h3>
                            <p>Some text</p>
                    </div>
                    <button id="close-modal-btn" aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                </div>
            </div>

        ) : null}
        </>
    )
}

export default Modal;

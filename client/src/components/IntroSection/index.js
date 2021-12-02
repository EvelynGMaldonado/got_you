import React, { useState } from 'react';
import Modal from '../Modal'


const IntroSection = () =>{

    const [showModal, setShowModal ] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return (

        <>
        <section className="intro">
        <div className="">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <img className="screen" src={require("../../assets/screens.jpg").default} style={{maxWidth:"50%"}}alt="pp"/>
        <div>
        <h4 className="works">How it works:</h4>
        <p>IGotcha works by allowing you to connect to someone who is pefect for lending a hand in whatever you need!</p>
        </div>
        <div className="full-width distribute-even fit">
        <button onClick={openModal} className="btnmore ">About us</button>
        <button className="btnmore">Contact us</button>
        <button className="btnmore">Language</button>
        </div>
        </div>
        </section>
        </>
    )

};

export default IntroSection;
import React, { useState } from 'react';
import "./css/Home.css";

import Loginform from '../components/Loginform'
import MissionBanner from '../components/MissionBanner'
import ImageBanner from '../components/ImageBanner'
// import IntroSection from '../components/IntroSection'
import Modal from '../components/Modal'
import ContactusModal from '../components/ContactusModal'

const Home = (props) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const [showContactusModal, setShowContactusModal] = useState(false);

  const openContactusModal = () => {
    setShowContactusModal(prev => !prev);
  };



  return (
    <main className="home base-grid home-columns" >
      <MissionBanner/>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ContactusModal showContactusModal={showContactusModal} setShowContactusModal={setShowContactusModal} />
       <ImageBanner/>
        <Loginform/>
         {/* <IntroSection/> */}
         <section className="intro">
        <div className="">
        <img className="screen" src={require("../assets/screens.jpg").default} style={{maxWidth:"50%"}}alt="pp"/>
        <div>
        <h4 className="works">How it works:</h4>
        <p>IGotcha works by allowing you to connect to someone who is pefect for lending a hand in whatever you need!</p>
        </div>
        <div className="full-width distribute-even fit">
        <button onClick={openModal} className="btnmore ">About us</button>
        <button onClick={openContactusModal} className="btnmore">Contact us</button>
        <button className="btnmore">Language</button>
        </div>
        </div>
        </section>
    </main>

  );
};

export default Home;

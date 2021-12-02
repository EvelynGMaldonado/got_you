import React, {useState} from 'react';
import "./css/Home.css";

import Loginform from '../components/Loginform'
import MissionBanner from '../components/MissionBanner'
import ImageBanner from '../components/ImageBanner'
import IntroSection from '../components/IntroSection'

const Home = (props) => {

  return (
    <main className="home base-grid home-columns" >
      <MissionBanner/>
       <ImageBanner/>
        <Loginform/>
         <IntroSection/>
    </main>

  );
};

export default Home;

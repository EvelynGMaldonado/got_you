import React from 'react';

const MissionBanner = () =>{

    return (
        <>
            <div className="mission full-width">
            <h5 className="miss">Mission statement</h5>
            <h6>The IGotcha app finds qualified individuals in your area or across the world to bring you the services that you need.
            "We as humans, will always have a need to seek help from others, conversely, we also have skills to share and help those around us."
            </h6>
            <div className="center">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">    
                <img src={require("../../assets/fb.png").default} style={{width:"30px"}} alt="facebook icon"/>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/instagram.png").default} style={{width:"30px"}} alt="instagram icon"/>
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/pinterest.png").default} style={{width:"30px"}} alt="pinterest icon"/>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={require("../../assets/twitter.png").default} style={{width:"30px"}} alt="twitter icon"/>
            </a>
            </div>
        </div>
        </>
    )

}

export default MissionBanner;
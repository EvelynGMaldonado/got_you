



const ImageBanner = () =>{

    return (
        <div className="images full-width distribute-even fit">
        <img src={require("../../assets/babysitter.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/caregiver.jpeg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/cleaning1.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/handyman.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/petsitter.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/photographer.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/remote.png").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../../assets/tutoring.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
      </div >
    )

}

export default ImageBanner;
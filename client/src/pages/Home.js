import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
// import Auth from '../utils/auth';
import "./Home.css";


const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  //update state besed on input changes
  // const handleChange = (event) =>{
  //   const {name, value} = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //     });
  // }


  // //submit form
  // const handleformSubmit = async (event) =>{
  //   event.preventDefault();
  //   console.log(formState);

  //   try{
  //     const {data} = await addUser({
  //       variables: {...formState},
  //     });
  //     Auth.login(data.addUser.token)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <main className="base-grid home-columns">
      <div className="mission full-width fit">
        <h5 className="miss">Mission statement</h5>
        <div className="center">
        <img src={require("../assets/fb.png").default} alt="pp"/>
        <img src={require("../assets/instagram.png").default} alt="pp"/>
        <img src={require("../assets/pinterest.png").default} alt="pp"/>
        <img src={require("../assets/twitter.png").default} alt="pp"/>
        </div>
      </div>
      <nav className="full-width nav-columns distribute-even fit">
        <button className="btn">Profile</button>
        <button className="btn">Find Service</button>
        <button className="btn">Offer Service</button>
        <button className="btn">Language</button>
        <button className="btn">Logout</button>
      </nav>
      <div className="images full-width distribute-even fit">
        <img src={require("../assets/babysitter.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/caregiver.jpeg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/cleaning1.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/handyman.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/petsitter.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/photographer.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/remote.png").default} style={{maxWidth:"10%"}} alt="pp"/>
        <img src={require("../assets/tutoring.jpg").default} style={{maxWidth:"10%"}} alt="pp"/>
      </div>
      <section className="login">
        <form className=" signin fit stack" style={{margin:"auto", maxWidth:"65%"}}>
          <h4 className="log">Login</h4>
          <div className="empw">
            <label>Email</label>
            <input placeholder="email"/>
            <label> Password</label>
            <input placeholder="pasword"/>
          </div>
          <button className="btnlog">Login</button>
        </form>
        <button className="btnsign full-width">Sign up</button>
      </section>
      <section className="intro">
        <div className="">
          <img className="screen" src={require("../assets/screens.jpg").default} style={{maxWidth:"50%"}}alt="pp"/>
          <div>
            <h4 className="works">How it works:</h4>
            <p>text</p>
          </div>
        <div className="full-width distribute-even fit">
        <button className="btnmore ">About us</button>
        <button className="btnmore">Contact us</button>
        <button className="btnmore">Language</button>
        </div>
        </div>
      </section>
    </main>

  );
};

export default Home;

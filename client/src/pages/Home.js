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
      <div className="full-width center">
        <p>Mission statement</p>
      </div>
      <input className="full-width" placeholder="search"/>
        <p>img1</p>
        <p>img2</p>
        <p>img3</p>
        <p>img4</p>
        <p>img5</p>
        <p>img6</p>
      <section className="login">
        <form className="fit stack" style={{margin:"auto", maxWidth:"65%"}}>
          <p>sign in</p>
          <label>Email</label>
          <input placeholder="email"/>
          <label> Password</label>
          <input placeholder="pasword"/>
          <button>Login</button>
        </form>
        <button>Sign up</button>
      </section>
      <section className="intro">
        <div className="fit align-center">
          <img/>
          <div>
            <h3>How it works:</h3>
            <p>text</p>
          </div>
        </div>
        <button>About us</button>
        <button>Contact us</button>
        <button>Language</button>
      </section>
    </main>

  );
};

export default Home;

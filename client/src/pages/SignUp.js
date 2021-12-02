import React from "react";
import "./css/SignUp.css";

//importing components
import Signupform from '../components/Signupform'

const SignUp = () =>{

    return(
        <main className="base-grid home-columns">
            <Signupform/>
        </main>
    );
}

export default SignUp;
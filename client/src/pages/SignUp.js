import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () =>{
    //set initial form state
    const [userFormData, setUserFormData] = useState ({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    });
    //set state for validation
    const [validated] = useState(false);
    //set state for alert
    // const [showAlert, setShowAlert] = useState(false);
    //mutation query to add a user
    const [createUser] = useMutation(ADD_USER);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
            ...userFormData, [name]: value
        });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefalut();
        //check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefalut();
            event.stopPropagation();
        }
        try {
            const { data } = await createUser ({
                VARIABLES: {
                    ...userFormData
                },
            });
            Auth.login();
        } catch (err) {
            console.log(err);
            // setShowAlert(true);
        }
        setUserFormData({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: ""
        })
    }

    return(
        <main className="base-grid home-columns">
            <nav className="full-width nav-columns distribute-even fit">
                <Link to="/profile">
                <button className="btn">Profile</button>
                </Link>
                <Link to="/find-service">
                <button className="btn">Find Service</button>
                </Link>
                <Link to="/offer-service">
                <button className="btn">Offer Service</button>
                </Link>
                <button className="btn">Language</button>
                <button onClick={Auth.logout}className="btn">Logout</button>
            </nav>
            <section className="sign full-width">
                <form className=" signup fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="sig">Sign up</h4>
                    <div className="empw">
                        <label>Name</label>
                        <input 
                            type="text"
                            placeholder="name"
                            name="first_name"
                            onChange={handleInputChange}
                            value={userFormData.first_name}
                            required
                        />
                        <label>Last Name</label>
                        <input 
                            type="text"
                            placeholder="last name"
                            name="last_name"
                            onChange={handleInputChange}
                            value={userFormData.last_name}
                            required
                        />
                        <label>Username</label>
                        <input 
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required
                        />
                        <label>Email</label>
                        <input 
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={handleInputChange}
                            value={userFormData.email}
                            required
                        />
                        <label> Password</label>
                        <input 
                            type="text"
                            placeholder="password"
                            name="password"
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                        />
                        <label>Confirm Password</label>
                        <input 
                        placeholder="confirm password"
                        name="confirm_password"
                        onChange={handleInputChange}
                        value={userFormData.confirm_password}
                        required
                        />
                    </div>
                    <button 
                        className="btnlog"
                        disabled = {!(userFormData.first_name && userFormData.last_name && userFormData.username && userFormData.email && userFormData.password && userFormData.confirm_password)}
                        type = "submit"
                        onClick={handleFormSubmit}
                        variant = "success">
                        Sign Up
                    </button>
                </form>
            </section>
        </main>
    );
}
export default SignUp;
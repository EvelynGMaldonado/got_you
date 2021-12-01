import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//importing middleware
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

const Signupform = () =>{

    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);
    
    // update state based on form input changes
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.token);
        } catch (e) {
          console.error(e);
        }
    };


    return(
        <>
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
                            value={formState.first_name}
                            // required
                        />
                    <label>Last Name</label>
                        <input 
                            type="text"
                            placeholder="last name"
                            name="last_name"
                            onChange={handleInputChange}
                            value={formState.last_name}
                            // required
                        />
                    <label>Username</label>
                        <input 
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={handleInputChange}
                            value={formState.username}
                            // required
                        />
                    <label>Email</label>
                        <input 
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={handleInputChange}
                            value={formState.email}
                            // required
                        />
                    <label> Password</label>
                        <input 
                            type="text"
                            placeholder="password"
                            name="password"
                            onChange={handleInputChange}
                            value={formState.password}
                            // required
                        />
                    {/* <label>Confirm Password</label>
                        <input 
                        placeholder="confirm password"
                        name="confirm_password"
                        onChange={handleInputChange}
                        value={formState.confirm_password}
                        required
                        /> */}
                    </div>
                    <button 
                        className="btnlog"
                        disabled = {!(formState.first_name && formState.last_name && formState.username && formState.email && formState.password)}
                        type = "submit"
                        onClick={handleFormSubmit}
                        variant = "success">
                        Sign Up
                    </button>
                </form>
            </section>
        </>
    )


}

export default Signupform;
import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

//importing middleware
import Auth from '../../utils/auth';
import {LOGIN_USER} from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const Loginform = () =>{


    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);    



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState, [name]: value
        });
    };
      
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
          const { data } = await login ({
                variables: {...formState},
            });
          Auth.login(data.login.token);
        } catch(err) {
          console.log(err);
        }    
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
    };




    return (
        <>
        <section className="login">
        <form onSubmit={handleFormSubmit} className=" signin fit stack" style={{margin:"auto", maxWidth:"65%"}}>
        <h4 className="log">Login</h4>
        <div className="empw full-width">
        <label>Email</label>
        <input 
          style={{maxWidth:"100%"}}
          type="text" 
          placeholder="email"
          name ="email"
          onChange = {handleInputChange}
          value = {formState.email}
          // required 
        />
        <label> Password</label>
        <input 
          style={{maxWidth:"100%"}} 
          type= "password"
          placeholder="pasword"
          name= "password"
          onChange = {handleInputChange}
          value = {formState.password}
          // required
        />
      </div>
      <button 
        className="btnlog"
        disabled = {!(formState.email && formState.password)}
        type = "submit"
        onClick={handleFormSubmit}
        variant = "success">
        Login
        </button>
        </form>
        <Link to="/signup">
        <button className="btnsign full-width">Sign up</button>
        </Link>
        </section>
        </>
    )

}

export default Loginform;
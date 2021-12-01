import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./OfferService.css";
import { useQuery } from '@apollo/client';
import {ADD_SERVICEPOST} from '../utils/mutations';
import { QUERY_SERVICES, QUERY_ME } from '../utils/queries'



const OfferService = () =>{
    const [formState, setFormState] = useState({ 
        name: '', 
        description: '', 
        email: '', 
        location: '', 
        hourly_rate: '', 
        phone_number: '', 
        image: '',
    });
    // const [addServicePost, { error, data }] = useMutation(ADD_SERVICEPOST, {
    //     update(cache, {data: { addServicePost } }) {
    //         try {
    //             const { services } = cache.readQuery({ query: QUERY_SERVICES });

    //             cache.writeQuery({
    //             query: QUERY_SERVICES,
    //             data: { services: [addServicePost, ...services] },
    //         });
    //         } catch (e) {
    //         console.error(e);
    //         }
    
    //         // update me object's cache
    //         const { me } = cache.readQuery({ query: QUERY_ME });
    //         cache.writeQuery({
    //         query: QUERY_ME,
    //         data: { me: { ...me, services: [...me.services, addServicePost] } },
    //         });
    //         //servicePost
    //     },
    //     });
    const [addServicePost, { error, data }] = useMutation(ADD_SERVICEPOST);
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormState({
            ...formState, [name]: value
        });
        console.log(formState)
        };
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);
            console.log(formState.name);
        
            try {
                console.log("here is the error")
            const { data } = await addServicePost({
                
            variables: {
                // ...formState,
                name : formState.name,
                description: formState.description,
                location: formState.location,
                hourly_rate: formState.hourly_rate,
                phone_number: formState.phone_number,
                image: 'image',
                user: Auth.getUser()
            },
            }); 
    
            // setFormState({
            //     name:'',
            //     description:'',
            //     location:'',
            //     hourly_rate:'',
            //     phone_number:'',
            //     image:'',
            // });
        } 
        catch (err) {
            
            console.error(err);
        }
        };
    

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
        <div className="full-width">
                <h3 className="center">Offer a service</h3>
            </div>
        <section className="login">
            <form onSubmit={handleFormSubmit} className=" signin fit stack" style={{margin:"auto", maxWidth:"65%"}}>
                <h4 className="log">Add a new service</h4>
                <div className="empw">
                    <label>Service Name</label>
                    <input 
                        placeholder="service name"
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        value={formState.name}
                        // required 
                    />
                    <label>Location</label>
                    <input 
                        placeholder="location"
                        type="text"
                        name="location"
                        onChange={handleInputChange}
                        value={formState.location}
                        // required 
                    />
                    <label>Hourly Rate</label>
                    <input 
                        placeholder="hourly rate"
                        type="text"
                        name="hourly_rate"
                        onChange={handleInputChange}
                        value={formState.hourly_rate}
                        // required 
                    />
                    <label>Phone Number</label>
                    <input 
                        placeholder="phone number"
                        type="text"
                        name="phone_number"
                        onChange={handleInputChange}
                        value={formState.phone_number}
                        // required 
                    />
                    <label>Email</label>
                    <input 
                        placeholder="email"
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                        value={formState.email}
                        // required 
                    />
                    <label>Service Description</label>
                    <input 
                        placeholder="service desciption"
                        type="text"
                        name="description"
                        onChange={handleInputChange}
                        value={formState.description}
                        // required 
                    />
                    {/* <label>Service Image</label>
                    <input 
                        placeholder="add a image of your service"
                        type="text"
                        name="image"
                        onChange={handleInputChange}
                        value={formState.image}
                        // required 
                    /> */}
                </div>                
                <div className="full-width distribute-even fit">
                    {/* <button
                        className="add fit"
                        disabled = {!(formState.image)}
                        type = "submit"
                        onClick={handleFormSubmit}
                        variant = "success">
                        Add photo
                    </button> */}
                    <button 
                        className="save fit"
                        disabled = {!(formState.name && formState.location && formState.hourly_rate && formState.phone_number && formState.email && formState.description)}
                        type = "submit"
                        onClick={handleFormSubmit}
                        variant = "success">
                        Save Changes
                    </button>
                    <button className="cancel fit">Cancel</button>
                </div>
            </form>
        </section>
        <section className="intro">
        <div className="">
            <div className="find">
                <img/>
                <form>
                    <h6>Service name:</h6>
                    <p>Location:</p>
                    <p>Hourly rate:</p>
                </form>
                <button className="btn-delete">Delete</button>
            </div>
        </div>
        </section>
    </main>
    );
}
export default OfferService;
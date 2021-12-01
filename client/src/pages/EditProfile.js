import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./EditProfile.css";

const EditProfile = () =>{
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
            <section className="edit full-width">
                <form className="editprof fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="ed">Edit Profile</h4>
                    <div className="empw">
                        <label>Name</label>
                        <input 
                            placeholder="name"
                            type="text"
                            placeholder="name"
                            name="first_name"
                            // onChange={handleInputChange}
                            // value={formState.first_name}
                            // required
                        />
                        <label>Last Name</label>
                        <input 
                            type="text"
                            placeholder="last name"
                            name="last_name"
                            // onChange={handleInputChange}
                            // value={formState.last_name}
                            // required
                        />
                        <label>Username</label>
                        <input 
                            type="text"
                            placeholder="username"
                            name="username"
                            // onChange={handleInputChange}
                            // value={formState.username}
                            // required
                        />
                        <label>Email</label>
                        <input 
                            type="text"
                            placeholder="email"
                            name="email"
                            // onChange={handleInputChange}
                            // value={formState.email}
                            // required
                        />
                        <label>Change Password</label>
                        <input 
                            type="text"
                            placeholder="change pasword"
                            name="password"
                            // onChange={handleInputChange}
                            // value={formState.password}
                            // required
                        />
                        <label>Confirm Password</label>
                        <input 
                            placeholder="confirm password"
                            name="confirm_password"
                            // onChange={handleInputChange}
                            // value={formState.confirm_password}
                            // required
                        />
                        <label>Biography</label>
                        <input 
                            placeholder="about me"
                            type="text"
                            name="aboutme"
                            // onChange={handleInputChange}
                            // value={formState.aboutme}
                            // required
                        />
                        <label>Update Profile Picture</label>
                        <input 
                            className="profpic" 
                            placeholder="upload profile picture"
                            type="text"
                            name="profpic"
                            // onChange={handleInputChange}
                            // value={formState.profpic}
                            // required
                        />
                    </div>
                        <div className="full-width distribute-even fit">
                            <button className="add fit">Add photo</button>
                            <button className="save fit">Save Changes</button>
                            <button className="cancel fit">Cancel</button>
                        </div>
                </form>
            </section>
        </main>
    );
}
export default EditProfile;
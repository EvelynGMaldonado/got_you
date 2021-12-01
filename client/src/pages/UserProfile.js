import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./css/UserProfile.css";

const UserProfile =({ user }) => {
    return(
        <main className="base-grid home-columns">
            <section className="edit full-width">
                <form className="editprof fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="ed">Edit Profile</h4>
                    <div className="empw">
                        <img/>
                        <h6>Full Name: {user?.first_name + user?.last_name} </h6>
                        <p>Email: {user?.email}</p>
                        <p>Biography:</p>
                        <p>My Services:</p>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    <Link to="/edit-profile">
                    <button className="editprof-btn">Edit Profile</button>
                    </Link>
                </form>
            </section>
        </main>
    );
}
export default UserProfile;
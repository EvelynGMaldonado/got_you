import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./UserProfile.css";

const UserProfile =() => {
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
                        <img/>
                        <h6>Full Name: </h6>
                        <p>Email:</p>
                        <p>Biography:</p>
                        <p>My Services:</p>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    <button className="editprof-btn">Edit Profile</button>
                </form>
            </section>
        </main>
    );
}
export default UserProfile;
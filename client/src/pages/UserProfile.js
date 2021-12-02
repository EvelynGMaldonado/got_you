import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import "./css/UserProfile.css";


const UserProfile =() => {
    const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache"
    });
    console.log("line 11", data);
    const user= loading?null:data.me
    return(
        <main className="base-grid home-columns">
            <section className="edit full-width">
                <form className="editprof fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="ed">Edit Profile</h4>
                    <div className="empw">
                        <img/>
                        <h6>Full Name: {`${user?.first_name} ${user?.last_name}`} </h6>
                        <p>Email: {user?.email}</p>
                        <p>Biography: {user?.aboutme}</p> 
                        <p>My Services:{user?.servicePost[0].name}</p>
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
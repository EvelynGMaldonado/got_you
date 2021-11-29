import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./OfferService.css";

const OfferService = () =>{
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
            <form className=" signin fit stack" style={{margin:"auto", maxWidth:"65%"}}>
                <h4 className="log">Add a new service</h4>
                <div className="empw">
                    <label>Service Name</label>
                    <input placeholder="service name"/>
                    <label>Location</label>
                    <input placeholder="location"/>
                    <label>Hourly Rate</label>
                    <input placeholder="hourly rate"/>
                    <label>Phone Number</label>
                    <input placeholder="phone number"/>
                    <label>Email</label>
                    <input placeholder="email"/>
                    <label>Service Description</label>
                    <input placeholder="service desciption"/>
                </div>
                <div className="full-width distribute-even fit">
                    <button className="add fit">Add photo</button>
                    <button className="save fit">Save Changes</button>
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
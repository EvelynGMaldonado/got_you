import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./css/ServicePost.css"

const ServicePost = () =>{
    return(
        <main className="base-grid home-columns">
            <section className="edit full-width">
                <form className="editprof fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="ed">Service Name: </h4>
                    <div className="empw">
                        <img/>
                        <h6>by: </h6>
                        <p>Location:</p>
                        <p>Description:</p>
                        <p>Hourly Rate:</p>
                    </div>
                    <button className="editprof-btn">Hire Service! </button>
                </form>
            </section>
        </main>
    );
}
export default ServicePost;
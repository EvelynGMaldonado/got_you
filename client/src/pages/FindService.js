import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import "./css/FindService.css";

const FindService = () =>{
    return(
        <main className="base-grid home-columns">
            <div className="full-width">
                <h3 className="center">Find a service</h3>
            </div>
            <form className="fit options full-width">
                <select className="select">
                    <option>Tutor-math</option>
                    <option>Tutor-math</option>
                    <option>Tutor-math</option>
                    <option>Tutor-math</option>
                </select>
                <input className="zipcode" placeholder="zipcode"/>
                <button className="go">go!</button>
            </form>
            <section className="edit full-width">
                <form className="editprof fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="ed">RESULTS</h4>
                    <div className="find">
                        <img/>
                        <form>
                            <h6>Service name:</h6>
                            <p>Provider's name:</p>
                            <p>Location:</p>
                            <p>Hourly rate:</p>
                        </form>
                        <button className="btn-more">More...</button>
                    </div>
                </form>
            </section>
        </main>
    );
}
export default FindService;
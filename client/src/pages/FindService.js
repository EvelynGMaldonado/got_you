import "./FindService.css";

const FindService = () =>{
    return(
        <main className="base-grid home-columns">
            <nav className="full-width nav-columns distribute-even fit">
                <button className="btn">Profile</button>
                <button className="btn">Find Service</button>
                <button className="btn">Offer Service</button>
                <button className="btn">Language</button>
                <button className="btn">Logout</button>
            </nav>
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
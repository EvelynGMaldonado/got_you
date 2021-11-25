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
            <form className="fit">
                <select>
                    <option>Tutor-math</option>
                    <option>Tutor-math</option>
                    <option>Tutor-math</option>
                    <option>Tutor-math</option>
                </select>
                <input placeholder="zipcode"/>
                <button>go!</button>
            </form>

        </main>
    );
}
export default FindService;
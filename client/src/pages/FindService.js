import "./FindService.css";

const FindService = () =>{
    return(
        <main className="base-grid">
            <nav className="fit distribute-even">
                <button>Profile</button>
                <button>Find Service</button>
                <button>Offer Service</button>
                <button>Language</button>
                <button>Logout</button>
            </nav>
            <div>
                <p>Find a service</p>
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
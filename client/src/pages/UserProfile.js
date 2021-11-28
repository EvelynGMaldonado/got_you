import "./UserProfile.css";

const UserProfile =() => {
    return(
        <main className="base-grid home-columns">
            <nav className="full-width nav-columns distribute-even fit">
                <button className="btn">Profile</button>
                <button className="btn">Find Service</button>
                <button className="btn">Offer Service</button>
                <button className="btn">Language</button>
                <button className="btn">Logout</button>
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
import "./EditProfile.css";

const EditProfile = () =>{
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
                        <label>Name</label>
                        <input placeholder="name"/>
                        <label>Last Name</label>
                        <input placeholder="last name"/>
                        <label>Email</label>
                        <input placeholder="email"/>
                        <label>Change Password</label>
                        <input placeholder="change pasword"/>
                        <label>Confirm Password</label>
                        <input placeholder="confirm pasword"/>
                        <label>Biography</label>
                        <input placeholder="about me"/>
                        <label>Update Profile Picture</label>
                        <input className="profpic" placeholder="upload profile picture"/>
                    </div>
                        <div className="full-width distribute-even fit">
                            <button className="add fit">Add photo</button>
                            <button className="save fit">Save Changes</button>
                            <button className="cancel fit">Cancel</button>
                        </div>
                </form>
            </section>
        </main>
    );
}
export default EditProfile;
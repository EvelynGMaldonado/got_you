import "./SignUp.css";

const SignUp = () =>{
    return(
        <main className="base-grid home-columns">
            <nav className="full-width nav-columns distribute-even fit">
                <button className="btn">Profile</button>
                <button className="btn">Find Service</button>
                <button className="btn">Offer Service</button>
                <button className="btn">Language</button>
                <button className="btn">Logout</button>
            </nav>
            <section className="sign full-width">
                <form className=" signup fit stack" style={{margin:"auto", maxWidth:"70%"}}>
                    <h4 className="sig">Sign up</h4>
                    <div className="empw">
                        <label>Name</label>
                        <input placeholder="name"/>
                        <label>Last Name</label>
                        <input placeholder="last name"/>
                        <label>Email</label>
                        <input placeholder="email"/>
                        <label> Password</label>
                        <input placeholder="pasword"/>
                        <label>Confirm Password</label>
                        <input placeholder="confirm pasword"/>
                    </div>
                    <button className="btnlog">Sign Up</button>
                </form>
            </section>
        </main>
    );
}
export default SignUp;
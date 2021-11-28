import "./ServicePost.css"

const ServicePost = () =>{
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
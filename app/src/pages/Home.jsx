import "../styles/Home.css";
import { Link } from "react-router-dom";
import banner from '../assets/top-banner.jpg';

function Home() {
    return (
        <div className="home page">
            
            <div className="home-text">
                <h1>Golfin Goods</h1>
                <h2>Your trusted source for golf products</h2>
            </div>

            <div className="home-text">
                <div className="info">
                    <hr />
                    <h3>See what we have to offer!</h3>
                    <Link className="btn btn-lg btn-success" to="/catalog">
                        Browse catalog
                    </Link>
                    <p>In our catalog, you'll find quality products at fairway prices.</p>
                </div>
                <img src="/images/golf-instructor.jpg" alt=""></img>
            </div>

            
        </div>
    );
}

export default Home;
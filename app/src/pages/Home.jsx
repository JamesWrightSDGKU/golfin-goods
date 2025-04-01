import "../styles/Home.css";
import { Link } from "react-router-dom";
import banner from '../assets/top-banner.jpg';

function Home() {
    return (
        <div className="home page">
            
            <div className="home-text">
                <h1>Golfin Goods</h1>
                <h3>Your trusted source for golf products</h3>
            </div>

            <div className="home-text">
                <div className="info">
                    <h3>Quality products, fairway prices</h3>
                    <p>Browse out catalog to find the latest golfing products to improve your game.</p>
                    <hr />
                    <Link className="btn btn-lg btn-success" to="/catalog">
                        Check our amazing catalog
                    </Link>
                </div>
                <img src="/images/golf-instructor.jpg" alt=""></img>
            </div>

            <div className="relative">
                <img src={banner} alt="" className="main-img" />
            </div>
        </div>
    );
}

export default Home;
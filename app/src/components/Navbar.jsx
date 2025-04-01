import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <span className="title">Golfin Goods</span>
            <ul>
                <li>
                    <Link to="/home"></Link>Home
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li> 
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li className="cart-container">
                    <Link to="/cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

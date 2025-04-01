import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

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
                    <Link to="/cart" className="btn btn-outline-secondary">
                        <span className="badge text-bg-primary">{cart.length}</span>
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </Link>

                    <button className="btn btn-outline-dark">
                        <i className="fa-regular fa-circle-user"></i>
                        {user.name}
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

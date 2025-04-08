import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import { useContext } from "react";
import DataContext from "../state/DataContext";

function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getNumOfProds() {
        // sumn the quantities of all the products
        let sum = 0;
        for(const prod of cart) {
            sum += prod.quantity;
        }
        
        return sum;
    }

    return (
        <div className="navbar">
            <span className="title logo">Golfin Goods</span>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
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
                        <span className="badge text-bg-primary">{getNumOfProds()}</span>
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

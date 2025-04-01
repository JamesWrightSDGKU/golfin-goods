import QuantityPicker from "./QuantityPicker";
import "../styles/Product.css";
import { useContext, useState } from "react";
import DataContext from "../state/DataContext";

function Product(props) {

    const [quantity, setQuantity] = useState(1);

    const addProdToCart = useContext(DataContext).addProdToCart;

    function add() {
        console.log("You have added a product.");
        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        addProdToCart(prodForCart);
    }

    function handleQuantity(qty) {
        console.log("Quantity changed!", qty);
        setQuantity(qty);
    }

    return (
        <div className="product">
            <img src={props.data.image} alt={props.data.title}></img>

            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className="unit">Total:</label>
                <label className="unit">Unit Price:</label>
            </div>
            
            <div className="prices">
                <label className="total">${(props.data.price * quantity).toFixed(2)}</label>
                <label className="unit">${props.data.price.toFixed(2)}</label>
            </div>


            <div className="controls">
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>

                <button className="btn btn-sm btn-success" onClick={add}>
                    <i className="fa-solid fa-cart-plus"></i>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Product;

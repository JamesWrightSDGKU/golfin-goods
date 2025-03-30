import QuantityPicker from "./QuantityPicker";
import "../styles/Product.css";

function Product(props) {

    function add() {
        console.log("You have added a product.");
    }

    return (
        <div className="product">
            <img src={props.data.image} alt={props.data.title}></img>
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label className="total">Total: ${props.data.price}</label>
                <label className="unit">Unit: ${props.data.price}</label>
            </div>


            <div className="controls">
                <QuantityPicker></QuantityPicker>

                <button className="btn btn-sm btn-success" onClick={add}>
                    <i className="fa-solid fa-cart-plus"></i>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Product;

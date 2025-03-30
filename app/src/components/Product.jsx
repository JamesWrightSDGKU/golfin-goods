import QuantityPicker from "./QuantityPicker";
import "../styles/Product.css";

function Product() {

    function add() {
        console.log("You have added a product.");
    }

    return (
        <div className="product">
            <h5>Title Here</h5>

            <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-success" onClick={add}>
                <i className="fa-solid fa-cart-plus"></i>
                Add
            </button>
        </div>
    );
}

export default Product;

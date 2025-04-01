import "../styles/ProductAdmin.css"
import { useState } from "react";

function ProductAdmin() {

    const [product, setProduct] = useState({
        title:"",
        price:"",
        image:"",
        category:""
    });

    function saveProduct() {
        console.log(product);
    }

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;
        let copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }
    
    return (
        <div className="prod-admin">
            <h3>Products</h3>

            <div className="form-field">
                <label className="form-label">Title</label>
                <input className="form-control" type="text" name="title" onBlur={handleProduct}/>
            </div>

            <div className="form-field">
                <label className="form-label">Price</label>
                <input className="form-control" type="number" name="price" onBlur={handleProduct}/>
            </div>

            <div className="form-field">
                <label className="form-label">Image</label>
                <input className="form-control" type="text" name="image" onBlur={handleProduct}/>
            </div>

            <div className="form-field">
                <label className="form-label">Category</label>
                <input className="form-control" type="text" name="category" onBlur={handleProduct}/>
            </div>

            <button className="btn btn-sm btn-primary" onClick={saveProduct}>Save</button>
            
        </div>
    );
}

export default ProductAdmin;

/**
 * 1 create the product state variable, the object should have:
 * -title
 * -price
 * -image
 * -category
 * 
 * 2 create the handleProduct function
 * 
 * 3 set onBlur and name to each input in the product form
 * 
 * 4 create the saveProduct function that console logs the object
 * 
 * 5 call the saveProduct when clicking on the save product button
 */
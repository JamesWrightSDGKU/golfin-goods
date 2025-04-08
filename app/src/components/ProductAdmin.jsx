import DataService from "../services/DataService";
import "../styles/ProductAdmin.css";
import { useState } from "react";

function ProductAdmin() {

    const [product, setProduct] = useState({
        title:"",
        price:"",
        image:"",
        category:""
    });

    
    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;
        
        console.log(name, text);
        
        let copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }
    
    async function save() {
        console.log("Saving product", product);

        let fixedProduct = {...product};
        fixedProduct.price = Number(product.price);

        // send it to the service
        
        let response = await DataService.saveProduct(fixedProduct);
        console.log(response);
    }

    return (
        <div className="prod-admin">
            <h3>Products</h3>

            <div className="form-field">
                <label className="form-label">Title</label>
                <input className="form-control" type="text" name="title" onBlur={handleProduct} />
            </div>

            <div className="form-field">
                <label className="form-label">Price</label>
                <input className="form-control" type="number" name="price" onBlur={handleProduct} />
            </div>

            <div className="form-field">
                <label className="form-label">Image</label>
                <input className="form-control" type="text" placeholder="/images/filename.png" name="image" onBlur={handleProduct} />
            </div>

            <div className="form-field">
                <label className="form-label">Category</label>
                <input className="form-control" type="text" name="category" onBlur={handleProduct} />
            </div>

            <button className="btn btn-sm btn-primary" onClick={save}>Save</button>
            
        </div>
    );
}

export default ProductAdmin;
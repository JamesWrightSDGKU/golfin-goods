import "../styles/Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../services/DataService";

function Catalog() {


    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    async function loadCategories() {
        const cats = await DataService.getCategories();
        setCategories(cats);
    }

    async function loadProducts() {
        const prods = await DataService.getProducts();
        setProducts(prods);
    }

    useEffect( function() { 
        loadProducts(); // this will be called when the page loads
        loadCategories();
    }, []);

    return (
        <div className="catalog page">
            <h1>Check out our amazing catalog!</h1>

            <div className="categories">
                {categories.map( cat => <button className="btn btn-outline-primary category" key={cat}>{cat}</button>
                )}
            </div>

            <div className="product-list">
                {products.map( item => <Product key={item._id} data={item}></Product>)}
            </div>
        </div>
    );
}

export default Catalog;

/**
 * 1 on DataService
 * create a fn that retrieves the categories from the server
 * get /api/categories
 * 
 * 2 on Catalog
 * when the page loads, call another function (loadCategories)
 * that will call the service, get the categories
 * ser the categories on a state variable
 * 
 * update the jsx to render the categories from the state variable
 */
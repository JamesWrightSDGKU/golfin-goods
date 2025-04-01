import Product from "../components/Product"
import "../styles/Catalog.css"

const mockData = [
    {
        "title": "Driver",
        "price": 549.99,
        "category": "Clubs",
        "image": "/images/driver.png",
        "_id": "123481"
    },
    {
        "title": "Putter",
        "price": 349.99,
        "category": "Clubs",
        "image": "/images/putter.png",
        "_id": "123231"
    },
    {
        "title": "Cart Bag",
        "price": 249.99,
        "category": "Bags",
        "image": "/images/cart-bag.png",
        "_id": "543481"
    },
    {
        "title": "Staff Bag",
        "price": 399.99,
        "category": "Bags",
        "image": "/images/staff-bag.png",
        "_id": "987623"
    },
    {
        "title": "High Spin",
        "price": 48.99,
        "category": "Balls",
        "image": "/images/high-spin.png",
        "_id": "123177"
    },
    {
        "title": "Low Spin",
        "price": 45.99,
        "category": "Balls",
        "image": "/images/low-spin.png",
        "_id": "123178"
    },
    {
        "title": "Sweater",
        "price": 149.99,
        "category": "Apparel",
        "image": "/images/sweater.png",
        "_id": "444325"
    },
    {
        "title": "Hat",
        "price": 36.99,
        "category": "Apparel",
        "image": "/images/hat.png",
        "_id": "552231"
    }
];

function Catalog() {
    return (
        <div className="catalog page">
            <h1>Check out our amazing catalog!</h1>

            <div className="list">
                {mockData.map( prod => <Product key={prod._id} data={prod}></Product>)}
            </div>
        </div>
    );
}

export default Catalog;

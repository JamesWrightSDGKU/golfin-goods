import Product from "../components/Product"
import "../styles/Catalog.css"

const mockData = [
    {
        "title": "Driver",
        "price": 549.99,
        "category": "Clubs",
        "image": "../../public/images/driver.png",
        "_id": "123481"
    },
    {
        "title": "Putter",
        "price": 349.99,
        "category": "Clubs",
        "image": "../../public/images/putter.png",
        "_id": "123231"
    },
    {
        "title": "Cart Bag",
        "price": 249.99,
        "category": "Bags",
        "image": "../../public/images/cart-bag.png",
        "_id": "543481"
    },
    {
        "title": "Staff Bag",
        "price": 399.99,
        "category": "Bags",
        "image": "../../public/images/staff-bag.png",
        "_id": "987623"
    },
    {
        "title": "High Spin",
        "price": 48.99,
        "category": "Balls",
        "image": "../../public/images/high-spin.png",
        "_id": "123177"
    },
    {
        "title": "Low Spin",
        "price": 45.99,
        "category": "Balls",
        "image": "../../public/images/low-spin.png",
        "_id": "123178"
    },
    {
        "title": "Sweater",
        "price": 149.99,
        "category": "Apparel",
        "image": "../../public/images/sweater.png",
        "_id": "444325"
    },
    {
        "title": "Hat",
        "price": 36.99,
        "category": "Apparel",
        "image": "../../public/images/hat.png",
        "_id": "552231"
    }
];

function Catalog() {
    return (
        <div className="catalog">
            <h1>Check out our amazing catalog!</h1>

            <div className="list">
                <Product data={mockData[0]}></Product>
                <Product data={mockData[1]}></Product>
                <Product data={mockData[2]}></Product>
                <Product data={mockData[3]}></Product>
                <Product data={mockData[4]}></Product>
                <Product data={mockData[5]}></Product>
                <Product data={mockData[6]}></Product>
                <Product data={mockData[7]}></Product>
            </div>
        </div>
    );
}

export default Catalog;

import "../styles/Discounts.css";
import { use, useState } from "react";

function Discounts() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code:"",
        discount:""
    });

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    }
    
    function save() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }
    
    return (
        <div className="discounts">
            <h3>Discount codes</h3>

            <div className="form-field">
                <label className="form-label">Code</label>
                <input className="form-control" type="text" onBlur={handleCoupon} name="code"/>
            </div>

            <div className="form-field">
                <label className="form-label">Discount</label>
                <input className="form-control" type="number" onBlur={handleCoupon} name="discount"/>
            </div>

            <button className="btn btn-sm btn-primary" onClick={save}>Save</button>

            <ul className="coupon-list">
                {allCoupons.map( cp => <li>{cp.code} - {cp.discount}%</li>)}
            </ul>
        </div>
    );
}

export default Discounts;
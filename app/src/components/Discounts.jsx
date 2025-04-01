import "../styles/Discounts.css";
import { useState } from "react";

function Discounts() {

    const [coupon, setCoupon] = useState({
        code:"",
        discount:""
    });

    function saveCoupon() {
        console.log(coupon);
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        /**
         * 3 Steps to modify Obj or Arrays in State vars
         * - Create a copy
         * - Modify the copy
         * - Set the copy
         */
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
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

            <button className="btn btn-sm btn-primary" onClick={saveCoupon}>Save</button>
        </div>
    );
}

export default Discounts;
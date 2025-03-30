import "../styles/Discounts.css";

function Discounts() {

    function save() {
        console.log("saving discount");
    }

    return (
        <div className="discounts">
            <h3>Discount codes</h3>

            <div className="form-field">
                <label className="form-label">Code</label>
                <input className="form-control" type="text"/>
            </div>

            <div className="form-field">
                <label className="form-label">Discount</label>
                <input className="form-control" type="text"/>
            </div>

            <button className="btn btn-sm btn-primary" onCLick={save}>Save</button>
        </div>
    );
}

export default Discounts;
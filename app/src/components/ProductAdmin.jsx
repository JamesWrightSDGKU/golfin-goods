import "../styles/ProductAdmin.css"

function ProductAdmin() {

    function save() {
        console.log("saving discount");
    }
    
    return (
        <div className="prod-admin">
            <h3>Products</h3>

            <div className="form-field">
                <label className="form-label">Title</label>
                <input className="form-control" type="text" />
            </div>

            <div className="form-field">
                <label className="form-label">Price</label>
                <input className="form-control" type="number" />
            </div>

            <div className="form-field">
                <label className="form-label">Image</label>
                <input className="form-control" type="text" />
            </div>

            <div className="form-field">
                <label className="form-label">Category</label>
                <input className="form-control" type="text" />
            </div>

            <button className="btn btn-sm btn-primary" onCLick={save}>Save</button>
            
        </div>
    );
}

export default ProductAdmin;
import "../styles/Admin.css";
import Discounts from "../components/Discounts";
import ProductAdmin from "../components/ProductAdmin";


function Admin() {
    return (
        <div className="admin page">

            <h1>Store Administration</h1>

            <div className="parent">
                <section>
                    <ProductAdmin />
                </section>

                <section>
                    <Discounts />
                </section>
            </div>
            
            
        </div>
    );
}

export default Admin;
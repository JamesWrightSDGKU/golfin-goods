import Discounts from "../components/Discounts";
import ProductAdmin from "../components/ProductAdmin";
import "../styles/Admin.css";


function Admin() {
    return (
        <div className="admin">

            <h1>Store Administration</h1>

            <div className="parent">
                <section>
                    <ProductAdmin></ProductAdmin>
                </section>

                <section>
                    <Discounts></Discounts>
                </section>
            </div>
            
            
        </div>
    );
}

export default Admin;
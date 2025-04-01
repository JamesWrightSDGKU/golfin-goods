import DataContext from "./DataContext";
import { useState } from "react";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1531, name:"James", email:"James@example.com"});

    function addProdToCart(item) {
        let copy = [...cart];
        copy.push(item);
        setCart(copy);
    }

    function removeProdFromCart() {

    }

    function clearCart() {

    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;
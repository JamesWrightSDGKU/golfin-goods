import DataContext from "./DataContext";
import { useState } from "react";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ id: 1531, name:"userJames", email:"james@example.com"});

    function addProdToCart(item) {
        let copy = [...cart];
        copy.push(item);
        setCart(copy);
    }

    function removeProdFromCart() {
        let copy = [...cart];
        copy.splice(copy.indexOf(item), 1);
        setCart(copy);
    }

    function clearCart() {
        setCart([]);
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
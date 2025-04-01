import { createContext } from "react";

/**
 * Context is an interface / blueprint
 * NO IMPLEMENTATION HERE
 */

const DataContext = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
    clearCart: () => {},
});

export default DataContext;
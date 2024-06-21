import React, { createContext, useState } from 'react';
import { Products } from '../../Products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (const product of Products) {
        cart[product.id] = 0;
    }
    return cart;
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const updateCart = (NewAmount,itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: NewAmount }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = Products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
      const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };

    const clearCart = () => {
        setCartItems(getDefaultCart()); // Återställ varukorgen till noll
    };

    return (
        <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart ,updateCart,getTotalCartAmount,getTotalCartItems,clearCart}}>
            {props.children}
        </ShopContext.Provider>
    );
}


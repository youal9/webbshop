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

    return (
        <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart ,updateCart,getTotalCartAmount}}>
            {props.children}
        </ShopContext.Provider>
    );
}


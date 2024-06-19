// Cart.js
import React, { useContext } from 'react';
import { ShopContext } from "../Components/Context/ShopContext";  
import { Products } from '../Products';
import '../Pages/Css/Cart.css';
import CartItem from '../Pages/CartItem';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  
  
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      
     
      <div className="cartitems">
        {Object.keys(cartItems).map(itemId => {
          const quantity = cartItems[itemId];
          if (quantity > 0) {
            const product = Products.find(product => product.id === parseInt(itemId));
            return <CartItem key={product.id} data={product} quantity={quantity} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>Total: ${totalAmount}</p>
          <button onClick={() => navigate("/Home")}>Continue Shopping</button>
          <button className='checkout-button'>Checkout</button>
        </div>
      ) : (
        <h1>the cart is Empty</h1>
      )}
      

    </div>
  );
};

export default Cart;
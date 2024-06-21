import React, { useContext, useState } from 'react';
import { ShopContext } from "../Components/Context/ShopContext";  
import { Products } from '../Products';
import '../Pages/Css/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../Pages/CartItem';


const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  
  const [loading, setLoading] = useState(false); // Tillståndsvariabel för laddning
  const [checkoutComplete, setCheckoutComplete] = useState(false); // Tillståndsvariabel för att visa "Tack"
  

  const totalAmount = getTotalCartAmount();

  const handleCheckout = () => {
    setLoading(true); // Sätt laddning till true när användaren klickar på Checkout

    // Simulera en laddning med setTimeout
    setTimeout(() => {
      setLoading(false); // Sätt laddning till false efter simuleringen är klar
      setCheckoutComplete(true); // Visa "Tack"-meddelande
      clearCart(); // Anropa clearCart för att återställa varukorgen
      // Simulera en navigering efter 2 sekunder
      
    }, 2000); // Simulerar en laddning i 2 sekunder (2000 millisekunder)
  };

  return (
    <div className='cart'>
      {!checkoutComplete ? (
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
      ) : (
        <div className="thank-you-message">
          <h1>Thank you for shopping with us!</h1>
          <FontAwesomeIcon icon={faTruck} className="truck-icon" />
        </div>
      )}

      {!checkoutComplete && totalAmount > 0 ? (
        <div className='checkout'>
          <p>Total: ${totalAmount}</p>
         
          {loading ? (
            <div className="loading-spinner">
              <p>Loading...</p>
             
            </div>
          ) : (
            <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
          )}
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;

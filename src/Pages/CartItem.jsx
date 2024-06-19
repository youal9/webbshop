import React,{useContext} from 'react'
import { ShopContext } from "../Components/Context/ShopContext";  
import '../Pages/Css/CartItem.css';

const CartItem = (props) => {

    const {id, productName,price,productImage}=props.data;
    const{cartItems,addToCart,removeFromCart,updateCart}=useContext(ShopContext)

  return (
    <div className='cartitem'>
    <img src={productImage} alt="" />
    <div className="description">
      <p><b>{productName}</b></p>
      <p>${price}</p>
      
      <div className="counter">

        <button onClick={()=>removeFromCart(id)}>-</button>
        <input value={cartItems[id]} onChange={(e)=>updateCart(Number(e.target.value),id)} />
        <button onClick={()=>addToCart(id)}>+</button>

      </div>
    </div>
  </div>
);
  
}

export default CartItem
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Products'; // Importera produktdatan
import '../Pages/Css/Info.css';
import { ShopContext } from "../Components/Context/ShopContext";

const Info = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState(''); // State för att hålla den valda storleken
  
  const { addToCart, cartItems } = useContext(ShopContext); // Ta med cartItems från ShopContext

  // Funktion för att hantera ändringar i storleksvalet
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Förhindra standardbeteende när knappen klickas
    addToCart(productId); // Använd productId för att lägga till produkten i varukorgen
  };

  // Hämta antalet av den specifika produkten i varukorgen
  const cartItemsAmount = cartItems[productId] || 0;

  // Här hämtar du den specifika produkten baserat på productId
  const product = Products.find(product => product.id === parseInt(productId));

  // Kontrollera om produkten finns och visa produktinformationen
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-container">
      <h2 className="product-name">Product Detail</h2>
      <div className="product-detail">
        <div className="product-info-container">
          <img className="productt-image" src={product.productImage} alt={product.productName} />
          <div className="product-info">
            <p className="info-title">Product Name:</p>
            <p className="info-content">{product.productName}</p>
          </div>
          <div className="product-info">
            <p className="info-title">Product Price:</p>
            <p className="info-content">${product.price}</p>
          </div>
          <div className="product-info">
            <p className="info-title">Product Description:</p>
            <p className="info-content">{product.description}</p>
          </div>
        
          <div className="product-info">
            <p className="info-title">Select Size:</p>
            <select value={selectedSize} onChange={handleSizeChange}>
              <option value="">Select Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              
            </select>
          </div>
        </div>
      </div>
      <button className="cart-pro" onClick={handleAddToCart}>
        Add to Cart {cartItemsAmount > 0 && `(${cartItemsAmount})`}
      </button>
    </div>
  );
}

export default Info;
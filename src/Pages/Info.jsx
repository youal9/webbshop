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

 // Bestäm vilka storleksalternativ som ska visas baserat på produkttypen
  const sizeOptions = product.type === 'clothing'
  ? ['XS', 'S', 'M', 'L']  // Om produkttypen är kläder, använd dessa storlekar
  : ['40', '41', '42', '43'];  // Om produkttypen inte är kläder (dvs. skor), använd dessa storlekar

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

              {sizeOptions.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
              
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
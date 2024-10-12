import React ,{ useContext }from 'react'
import Card from 'react-bootstrap/Card';
import { ShopContext } from "../Context/ShopContext";
import Button from 'react-bootstrap/Button';
import '../../Pages/Css/Product.css';








const Product = (props) => {

    const { id, productName, price, productImage, description} = props.data;
    
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems[id];

    const handleAddToCart = (e) => {
        e.preventDefault(); // Förhindra standardbeteende när knappen klickas
        addToCart(id);
    }
  return (
    <Card className='product-card' >
    <div className="product-image-wrapper" >
        <Card.Img className="product-image" variant="top" src={productImage} />
    </div>
    <Card.Body  >
        <Card.Title >
            {productName}
        </Card.Title>
        
        <Card.Text >
            {description}
        </Card.Text>
        <Card.Text >
         <strong>{price}$</strong>
        </Card.Text>
        
       
    </Card.Body>
    <Card.Body>
        <Button className="custom-button" onClick={handleAddToCart}>
            Add to Cart {cartItemsAmount > 0 && `(${cartItemsAmount})`}
        </Button>
    </Card.Body>
</Card>
  )
}

export default Product
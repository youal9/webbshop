import React,{useState} from 'react'
import { Link } from 'react-router-dom'; // Glöm inte att importera Link här

import { Products } from '../Products';
import Product from '../Components/Product/Product';
import '../Pages/Css/Shop.css';









const Women = () => {

    // Filtrera produkter baserat på kategorin 'mens'
    const womensProducts = Products.filter(product => product.category === 'women');

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  // Uppdatera till att använda event-objektet och extrahera värdet
  };

   // Filtrera produkterna baserat på söktermen
  const filteredProducts = womensProducts.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className='shop'>
      
      <div className="title">
        <h1>Women 's  Collection</h1>
      </div>

      <div className="search-container">
     <form onSubmit={(e) => e.preventDefault()} className="search-form">
      
      <input 
        type="text" 
        placeholder="Sök produkter..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      <button className='button-men'  type="submit">Sök</button>
     </form>
     </div>

      <div className="shop-products">
  {filteredProducts.map(product => (
    <div key={`kid_${product.id}`} className="product-link">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <Product data={product} />
      </Link>
    </div>
  ))}
</div>

    </div>
  )
}

export default Women
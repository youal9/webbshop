import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../Products';
import Product from '../Components/Product/Product';
import '../Pages/Css/Shop.css';

const Men = () => {
   const mensProducts = Products.filter(product => product.category === 'men');
   const [searchTerm, setSearchTerm] = useState('');

   const handleSearchChange = (e) => {
       setSearchTerm(e.target.value);
   };

   const filteredProducts = mensProducts.filter(product =>
       product.productName.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
       <div className='shop'>
           <div className="title">
               <h1>Mens Collection</h1>
           </div>

           <div className="search-container">
               <form onSubmit={(e) => e.preventDefault()} className="search-form">
                   <input 
                       type="text" 
                       placeholder="Sök produkter..." 
                       value={searchTerm} 
                       onChange={handleSearchChange} 
                   />
                   <button className='button-men' type="submit">Sök</button>
               </form>
           </div>

           <div className="shop-products">
               {filteredProducts.length > 0 ? (
                   filteredProducts.map(product => (
                       <div key={`kid_${product.id}`} className="product-link">
                           <Link to={`/product/${product.id}`} className="product-image-link">
                               <Product data={product} />
                           </Link>
                       </div>
                   ))
               ) : (
                   <p>Tyvärr, inga produkter matchar din sökning.</p>
               )}
           </div>
       </div>
   );
}

export default Men;

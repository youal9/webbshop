import React from 'react';
import '../Pages/Css/Home.css';
import { useTypewriter} from 'react-simple-typewriter';
import video from "../assets/Airr.mp4"
import sport from "../assets/Shot.jpg"
import { Link } from 'react-router-dom'; // Glöm inte att importera Link här
import Product from '../Components/Product/Product';
import { Products } from '../Products';


const Home = () => {
    const homeProducts = Products.filter(product => product.category === 'home');

    const[typewriter]=useTypewriter({
        words:['Style and Fashion','Performance and Durability','Comfort'],
        loop:{},
        typeSpeed:100,
        delaySpeed:1000,
        deleteSpeed:50,
       
    })
    return (
      <div className='home'>

        <section className="video-section">
          <div className="video-container">
            <video src={video} autoPlay loop muted style={{ maxWidth: "100%", maxHeight: "500px" }} />
            <div className='video-text'>
                <h2> Coming Soon</h2>
            </div>
            <div className="video-text">
        
             <h1>{typewriter}</h1>
            </div>
          </div>
        </section>

        <section className='hero-section'>
          <div className="hero-text">
            <h2>Our History</h2>
            <p><b>
             AthletX is not just a brand today; it is a movement.
              With a dedicated community of athletes and a passionate fan base,
               AthletX continues to push the boundaries of sportswear and training accessories.
                By staying true to its values of quality, performance, and style, 
                they look forward to continuing to inspire people to live an active and healthy life with 
                AthletX as their companion along the way.
            </b></p>
          </div>
          <div className="image-overlay">
            <img src={sport} alt="" />
          </div>
        </section>

        <section className='future'>
          <div className="future-text">
            <h2>Featured Products </h2>
            
          </div>
         
        </section>

        <div className="productss">
        {homeProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-link">
           <div className="product-image-link">
           <Product data={product} />
        </div>
            </Link>
        ))}
        </div>
      </div>
    );
  }
  

export default Home;
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Kids from './Pages/Kids';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Info from './Pages/Info';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ShopContextProvider } from './Components/Context/ShopContext';

function App() {
  return (
    <div className='app'>
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/product/:productId" element={<Info />} />
            
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

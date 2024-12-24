import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ChocolateDetails from './components/ChocolateDetails';
import ChocolateList from './components/ChocolateList';
import Cart from './components/Cart';
import Timer from './Timer';

function App() {
  const [cart, setCart] = React.useState([]);
  return (
    <Router>
      <Navbar cart={cart} />
      <Timer />
      <Routes>
        <Route path='/' element={<ChocolateList setCart={setCart} />} />
        <Route path='/chocolate-details/:id' element={<ChocolateDetails />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// <BrowserRouter>
//   <Routes>
//     <Route path='' element={<Home />} >
//   </Routes>
// </BrowserRouter>

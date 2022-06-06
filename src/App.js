import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './components/layout/navBar/NavBar'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartContext';
import Footer from './components/layout/footer/Footer';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar2 />
        <AppRouter />
      </BrowserRouter>
      <Footer />
    </CartProvider>
  );
}

export default App;

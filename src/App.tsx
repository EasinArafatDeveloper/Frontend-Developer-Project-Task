import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';

// Scroll to top helper when route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          
          {/* Main App Shell */}
          <Header />
          
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={
                <div style={{ padding: '80px 24px', textAlign: 'center' }}>
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Page Not Found</h2>
                  <Link to="/" style={{ color: 'var(--primary)', fontWeight: '600' }}>Back to Home</Link>
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

// In case the Link component is needed inside the wildcard fallback route
import { Link } from 'react-router-dom';

export default App;

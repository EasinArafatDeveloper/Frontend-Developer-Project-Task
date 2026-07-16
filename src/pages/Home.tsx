import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  // Get top 4 featured products (highest ratings)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="fade-in-section" style={{ paddingBottom: '80px' }}>
      {/* Hero Banner */}
      <section className="hero-section container">
        <div className="hero-content">
          <span className="hero-tag">New Season Collection</span>
          <h1 className="hero-title">Redefine Your Everyday Style</h1>
          <p className="hero-description">
            Discover premium materials, timeless designs, and unmatched comfort in our latest summer release.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-primary">
              Shop The Collection
              <ArrowRight size={18} />
            </Link>
            <Link to="/shop?category=Women" className="btn btn-secondary">
              Explore Women's
            </Link>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
          alt="Fashion Model Hero" 
          className="hero-bg"
        />
      </section>

      {/* Brand Values / Value Props */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '32px',
            padding: '32px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
              <Truck size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Free Shipping</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>On all orders above 3,000 BDT</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
              <RefreshCw size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Easy Returns</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Hassle-free 15-day return policy</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ padding: '10px', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Secure Checkout</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Fully encrypted payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-description">Handpicked collections tailored for you</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3">
          {/* Men Category */}
          <Link to="/shop?category=Men" className="product-card" style={{ height: '360px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop" 
              alt="Men's collection" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '24px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#ffffff', z-index: 2 }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>Men</h3>
              <p style={{ fontSize: '14px', opacity: '0.8', marginTop: '4px' }}>Classics & Essentials &rarr;</p>
            </div>
          </Link>
          
          {/* Women Category */}
          <Link to="/shop?category=Women" className="product-card" style={{ height: '360px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop" 
              alt="Women's collection" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '24px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#ffffff', z-index: 2 }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>Women</h3>
              <p style={{ fontSize: '14px', opacity: '0.8', marginTop: '4px' }}>Trendy & Elegant &rarr;</p>
            </div>
          </Link>

          {/* Accessories Category */}
          <Link to="/shop?category=Accessories" className="product-card" style={{ height: '360px', position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop" 
              alt="Accessories collection" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '24px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: '#ffffff', z-index: 2 }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff' }}>Accessories</h3>
              <p style={{ fontSize: '14px', opacity: '0.8', marginTop: '4px' }}>Complete Your Vibe &rarr;</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Trending Now</h2>
            <p className="section-description">Most loved items based on customer reviews</p>
          </div>
          <Link to="/shop" className="btn btn-outline" style={{ padding: '10px 18px', fontSize: '14px' }}>
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

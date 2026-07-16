import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Wishlist: React.FC = () => {
  const { wishlist } = useCart();

  // Find products matching the wishlist IDs
  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="container fade-in-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <Heart size={56} style={{ color: 'var(--text-tertiary)', marginBottom: '24px' }} />
        <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Your Wishlist is Empty</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Explore our collection and add your favorite items to your wishlist.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container fade-in-section" style={{ paddingBottom: '80px' }}>
      {/* Title */}
      <div style={{ marginTop: '40px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0' }}>Your Wishlist</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage your saved items and add them to your cart</p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-4">
        {wishlistedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Back to shop navigation */}
      <div style={{ marginTop: '32px', textAlign: 'left' }}>
        <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600' }}>
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

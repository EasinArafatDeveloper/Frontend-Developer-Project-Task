import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  
  const isWishlisted = isInWishlist(product.id);
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    
    // Select first options by default
    const color = product.colors[0] || 'Default';
    const size = product.sizes[0] || 'Standard';
    addToCart(product, color, size, 1);
  };

  // Determine badge type
  const renderBadge = () => {
    if (!product.inStock || product.stockCount === 0) {
      return <span className="product-badge out-of-stock">Sold Out</span>;
    }
    if (product.isNew) {
      return <span className="product-badge new">New</span>;
    }
    if (product.isSale) {
      return <span className="product-badge sale">Sale</span>;
    }
    return null;
  };

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        {renderBadge()}
        
        {/* Wishlist Button */}
        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} fill={isWishlisted ? "var(--accent)" : "none"} />
        </button>

        {/* Product Image Link */}
        <Link to={`/product/${product.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-img" 
            loading="lazy"
          />
        </Link>

        {/* Quick Add Button */}
        {product.inStock && (
          <button 
            className="quick-add-btn" 
            onClick={handleQuickAdd}
          >
            <ShoppingCart size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            Quick Add
          </button>
        )}
      </div>

      {/* Info panel */}
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name" title={product.name}>{product.name}</h3>
        </Link>
        
        <div className="product-meta">
          <span className="product-price">{product.price} BDT</span>
          <div className="product-rating">
            <Star size={14} className="star-icon" />
            <span>{product.rating}</span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}>({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

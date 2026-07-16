import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Plus, Minus, ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Find current product
  const product = products.find((p) => p.id === Number(id));

  // State hooks
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [addedFeedback, setAddedFeedback] = useState(false);

  // Re-sync states when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] || '');
      setSelectedSize(product.sizes[0] || '');
      setQuantity(1);
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container fade-in-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <AlertTriangle size={48} style={{ color: '#fbbf24', marginBottom: '24px' }} />
        <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Product Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          The product you are trying to view does not exist or has been removed.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Back to Shop Catalog
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  // Quantity adjusters
  const incrementQty = () => {
    if (quantity < product.stockCount) {
      setQuantity((q) => q + 1);
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    addToCart(product, selectedColor, selectedSize, quantity);
    setAddedFeedback(true);
    
    // Reset feedback message after 2.5s
    setTimeout(() => {
      setAddedFeedback(false);
    }, 2500);
  };

  // Get 4 related products in the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container fade-in-section" style={{ paddingBottom: '80px' }}>
      {/* Back to shop navigation */}
      <div style={{ marginTop: '24px', marginBottom: '16px' }}>
        <button 
          onClick={() => navigate(-1)} 
          className="btn-outline" 
          style={{ 
            border: 'none', 
            background: 'transparent', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            cursor: 'pointer',
            padding: '8px 0',
            fontWeight: '600',
            color: 'var(--text-secondary)'
          }}
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <div className="details-grid">
        {/* Gallery Panel */}
        <div className="gallery-container">
          <div className="gallery-thumbs">
            {product.images.map((imgUrl, index) => (
              <button
                key={index}
                className={`gallery-thumb ${activeImage === imgUrl ? 'active' : ''}`}
                onClick={() => setActiveImage(imgUrl)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={imgUrl} alt={`${product.name} gallery ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className="gallery-main">
            <img src={activeImage} alt={product.name} />
          </div>
        </div>

        {/* Details Information */}
        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.name}</h1>

          {/* Price & Stock & Rating Row */}
          <div className="details-meta-row">
            <span className="details-price">{product.price} BDT</span>
            <div className="product-rating">
              <Star size={16} className="star-icon" />
              <span style={{ fontWeight: '600' }}>{product.rating}</span>
              <span style={{ color: 'var(--text-tertiary)' }}>({product.reviewCount} customer reviews)</span>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            {product.inStock && product.stockCount > 0 ? (
              <span className="stock-status instock">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                In Stock ({product.stockCount} units left)
              </span>
            ) : (
              <span className="stock-status outofstock">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
                Out of Stock
              </span>
            )}
          </div>

          <p className="details-description">{product.description}</p>

          {/* Color Selector */}
          {product.colors.length > 0 && (
            <div className="selector-group">
              <h3 className="selector-label">Color: <span style={{ fontWeight: '500', textTransform: 'none', color: 'var(--text-secondary)' }}>{selectedColor}</span></h3>
              <div className="color-swatches">
                {product.colors.map((color) => {
                  // Standard mock swatch colors
                  let background = '#ccc';
                  if (color.toLowerCase().includes('white')) background = '#ffffff';
                  else if (color.toLowerCase().includes('navy')) background = '#1e293b';
                  else if (color.toLowerCase().includes('olive')) background = '#556b2f';
                  else if (color.toLowerCase().includes('blue')) background = '#3b82f6';
                  else if (color.toLowerCase().includes('sky blue')) background = '#bae6fd';
                  else if (color.toLowerCase().includes('sand')) background = '#f5f5dc';
                  else if (color.toLowerCase().includes('pink')) background = '#f472b6';
                  else if (color.toLowerCase().includes('yellow')) background = '#fef08a';
                  else if (color.toLowerCase().includes('denim') || color.toLowerCase().includes('indigo')) background = '#2b4c7e';
                  else if (color.toLowerCase().includes('black')) background = '#000000';
                  else if (color.toLowerCase().includes('brown') || color.toLowerCase().includes('chestnut')) background = '#8b4513';
                  else if (color.toLowerCase().includes('red') || color.toLowerCase().includes('crimson')) background = '#991b1b';
                  else if (color.toLowerCase().includes('green')) background = '#065f46';
                  else if (color.toLowerCase().includes('tan')) background = '#d2b48c';
                  else if (color.toLowerCase().includes('gray')) background = '#6b7280';
                  else if (color.toLowerCase().includes('oatmeal')) background = '#e5e7eb';
                  else if (color.toLowerCase().includes('gold')) background = '#d4af37';
                  else if (color.toLowerCase().includes('terracotta')) background = '#c2593f';

                  return (
                    <button
                      key={color}
                      className={`color-swatch ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      aria-label={`Select color ${color}`}
                    >
                      <div className="color-swatch-inner" style={{ backgroundColor: background }} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes.length > 0 && (
            <div className="selector-group">
              <h3 className="selector-label">Size: <span style={{ fontWeight: '500', textTransform: 'none', color: 'var(--text-secondary)' }}>{selectedSize}</span></h3>
              <div className="size-chips">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-chip ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Purchase Controls Row */}
          {product.inStock ? (
            <div className="purchase-row">
              {/* Quantity Counter */}
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={decrementQty}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="quantity-val">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={incrementQty}
                  disabled={quantity >= product.stockCount}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="details-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={handleAddToCart}
                  style={{ flexGrow: 1 }}
                >
                  {addedFeedback ? (
                    <>
                      <Check size={18} />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Add to Cart
                    </>
                  )}
                </button>

                <button 
                  className={`btn-icon ${isWishlisted ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                  style={{ width: '48px', height: '48px' }}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart size={20} fill={isWishlisted ? "var(--accent)" : "none"} style={{ color: isWishlisted ? 'var(--accent)' : 'inherit' }} />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ padding: '16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '32px', fontWeight: '500' }}>
              Currently Unavailable
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section style={{ marginTop: '80px', borderTop: '1px solid var(--border)', paddingTop: '64px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '32px' }}>You May Also Like</h2>
          <div className="grid grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

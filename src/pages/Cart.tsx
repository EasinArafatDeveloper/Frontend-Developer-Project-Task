import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft, Tag, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartSubtotal, shippingCost, cartTotal, clearCart } = useCart();

  // Coupon code states
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0); // in BDT
  const [couponError, setCouponError] = useState('');

  // Checkout modal success state
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (couponCode.toUpperCase() === 'AURA10') {
      const discount = Math.round(cartSubtotal * 0.1);
      setCouponDiscount(discount);
      setCouponApplied(true);
    } else {
      setCouponError('Invalid coupon code. Try "AURA10" for 10% off!');
    }
  };

  const removeCoupon = () => {
    setCouponDiscount(0);
    setCouponApplied(false);
    setCouponCode('');
    setCouponError('');
  };

  const handleCheckout = () => {
    setShowCheckoutSuccess(true);
    clearCart();
    removeCoupon();
  };

  // Free shipping alert calculation
  const freeShippingThreshold = 3000;
  const remainingForFreeShipping = freeShippingThreshold - cartSubtotal;

  if (showCheckoutSuccess) {
    return (
      <div className="container fade-in-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-full)', color: 'var(--primary)', marginBottom: '24px' }}>
          <CheckCircle size={56} />
        </div>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px' }}>Order Placed Successfully!</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 36px auto', fontSize: '16px', lineStyle: '1.6' }}>
          Thank you for shopping at AURA. Your mock order has been received. We've sent a receipt to your email, and we'll notify you when it ships.
        </p>
        <Link to="/shop" className="btn btn-primary">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container fade-in-section" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <ShoppingBag size={56} style={{ color: 'var(--text-tertiary)', marginBottom: '24px' }} />
        <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Your Shopping Cart is Empty</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Explore Products
        </Link>
      </div>
    );
  }

  const finalTotal = cartTotal - couponDiscount;

  return (
    <div className="container fade-in-section" style={{ paddingBottom: '80px' }}>
      {/* Title */}
      <div style={{ marginTop: '40px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0' }}>Shopping Cart</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Review your items and proceed to checkout</p>
      </div>

      {/* Free Shipping Progress Alert */}
      {remainingForFreeShipping > 0 ? (
        <div style={{ padding: '14px 20px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', marginBottom: '32px', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}>
          Add <span style={{ color: 'var(--primary)', fontWeight: '700' }}>{remainingForFreeShipping} BDT</span> more to qualify for <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Free Shipping!</span>
        </div>
      ) : (
        <div style={{ padding: '14px 20px', backgroundColor: 'var(--primary-light)', border: '1px solid var(--primary-light)', borderRadius: 'var(--radius-md)', marginBottom: '32px', fontSize: '14px', fontWeight: '600', color: 'var(--primary)' }}>
          🎉 Congratulations! Your order qualifies for <span style={{ fontWeight: '700' }}>Free Shipping!</span>
        </div>
      )}

      <div className="cart-grid">
        {/* Cart items list */}
        <div className="cart-items-list">
          {cart.map((item, index) => (
            <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="cart-item">
              {/* Product Image */}
              <div className="cart-item-img">
                <img src={item.product.image} alt={item.product.name} />
              </div>

              {/* Product Info */}
              <div className="cart-item-details">
                <div>
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="cart-item-name">{item.product.name}</h3>
                  </Link>
                  <div className="cart-item-variants">
                    <span>
                      <span className="cart-item-variant-label">Color:</span> {item.selectedColor}
                    </span>
                    <span>
                      <span className="cart-item-variant-label">Size:</span> {item.selectedSize}
                    </span>
                  </div>
                </div>

                {/* Quantity Editor */}
                <div className="quantity-selector" style={{ height: '38px', width: 'fit-content' }}>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="quantity-val" style={{ width: '30px' }}>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)}
                    disabled={item.quantity >= item.product.stockCount}
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Line Price & Remove */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span className="cart-item-price">
                    {item.product.price * item.quantity} BDT
                  </span>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.product.id, item.selectedColor, item.selectedSize)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Continue shopping link */}
          <div style={{ marginTop: '16px' }}>
            <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600' }}>
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary sidebar */}
        <div className="summary-card">
          <h3 className="summary-title">Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{cartSubtotal} BDT</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{shippingCost === 0 ? 'FREE' : `${shippingCost} BDT`}</span>
          </div>

          {couponDiscount > 0 && (
            <div className="summary-row" style={{ color: 'var(--accent)', fontWeight: '600' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Tag size={14} />
                Promo Discount (10%)
              </span>
              <span>-{couponDiscount} BDT</span>
            </div>
          )}

          {/* Coupon Code Input */}
          <div className="summary-promo" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
            {couponApplied ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '13px' }}>Coupon Applied!</span>
                <button
                  onClick={removeCoupon}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '12px', fontWeight: '700' }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={applyCoupon} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Promo Code (AURA10)"
                  className="input"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{ padding: '8px 12px', fontSize: '13px' }}
                />
                <button type="submit" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
                  Apply
                </button>
              </form>
            )}
            {couponError && (
              <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '8px', fontWeight: '500' }}>{couponError}</p>
            )}
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>{finalTotal} BDT</span>
          </div>

          <button className="btn btn-primary" onClick={handleCheckout} style={{ width: '100%', height: '48px' }}>
            Checkout Mock Order
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubsubscribed(true);
      setEmail('');
      setTimeout(() => setSubsubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <span className="logo" style={{ fontSize: '22px' }}>
              <Sparkles size={20} className="star-icon" style={{ color: 'var(--primary)' }} />
              AURA<span>.</span>
            </span>
            <p>
              Elevate your daily style with premium craftsmanship and curated modern fashion.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                <MapPin size={16} style={{ color: 'var(--primary)' }} />
                <span>123 Fashion Blvd, Gulshan, Dhaka</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                <Phone size={16} style={{ color: 'var(--primary)' }} />
                <span>+880 1688 399676</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                <Mail size={16} style={{ color: 'var(--primary)' }} />
                <span>hello@aurafashion.com</span>
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links">
              <li><a href="/shop?category=Men">Men's Collection</a></li>
              <li><a href="/shop?category=Women">Women's Apparel</a></li>
              <li><a href="/shop?category=Accessories">Accessories</a></li>
              <li><a href="/shop">All Products</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="footer-title">Help</h4>
            <ul className="footer-links">
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="footer-title">Newsletter</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Subscribe to receive updates on new drops, styling tips, and private sales.
            </p>
            {subscribed ? (
              <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--primary)', fontWeight: '600', fontSize: '14px' }}>
                Thank you! You've been subscribed.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ padding: '10px 14px' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '10px', borderRadius: 'var(--radius-md)' }} aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AURA Fashion. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const { cartCount, wishlist } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header-wrapper">
      <div className="container header">
        {/* Mobile Menu Button */}
        <button 
          className="btn-icon mobile-nav-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <Sparkles size={24} className="star-icon" style={{ color: 'var(--primary)' }} />
          AURA<span>.</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Shop
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Wishlist
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <button 
            className="btn-icon" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/wishlist" className="btn-icon" aria-label="View Wishlist">
            <Heart size={20} />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </Link>

          <Link to="/cart" className="btn-icon" aria-label="View Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMobileMenu} />
      )}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <span className="logo">
            <Sparkles size={20} className="star-icon" style={{ color: 'var(--primary)' }} />
            AURA<span>.</span>
          </span>
          <button className="btn-icon" onClick={closeMobileMenu} aria-label="Close Menu">
            <X size={20} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
            style={{ fontSize: '18px', padding: '10px 0' }}
          >
            Home
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
            style={{ fontSize: '18px', padding: '10px 0' }}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/wishlist" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
            style={{ fontSize: '18px', padding: '10px 0' }}
          >
            Wishlist ({wishlist.length})
          </NavLink>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
            style={{ fontSize: '18px', padding: '10px 0' }}
          >
            Cart ({cartCount})
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

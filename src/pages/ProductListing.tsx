import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, EyeOff, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';

export const ProductListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  // Sync category state when URL parameter changes
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  // Simulate skeleton loader when filters or search change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500ms shimmer loading
    return () => clearTimeout(timer);
  }, [categoryParam, sortBy, searchQuery]);

  // Handle Search Input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSortBy('default');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (categoryParam !== 'All') {
      result = result.filter(
        (product) => product.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryParam, searchQuery, sortBy]);

  return (
    <div className="container fade-in-section" style={{ paddingBottom: '80px' }}>
      {/* Title Header */}
      <div style={{ marginTop: '40px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', margin: '0' }}>Shop Catalog</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Explore our range of premium clothing and accessories</p>
      </div>

      <div className="shop-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div>
            <h3 className="filter-group-title">Search</h3>
            <div className="search-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                className="input search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div>
            <h3 className="filter-group-title">Categories</h3>
            <div className="category-buttons">
              {['All', 'Men', 'Women', 'Accessories'].map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${categoryParam === cat ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <button className="btn btn-outline" onClick={resetFilters} style={{ marginTop: '16px' }}>
            <RotateCcw size={16} />
            Reset Filters
          </button>
        </aside>

        {/* Product Grid & Controls */}
        <main>
          {/* Controls Bar */}
          <div className="shop-controls">
            <span className="results-count">
              {isLoading ? 'Searching...' : `${filteredProducts.length} items found`}
            </span>

            <div className="sort-select-wrapper">
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <SlidersHorizontal size={14} />
                Sort by:
              </span>
              <select
                className="select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ padding: '8px 36px 8px 12px' }}
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Catalog Listing */}
          {isLoading ? (
            <div className="grid grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <EyeOff size={48} className="empty-state-icon" />
              <h3>No products found</h3>
              <p>We couldn't find any products matching your current filters or search term.</p>
              <button className="btn btn-primary" onClick={resetFilters}>
                Clear Search & Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

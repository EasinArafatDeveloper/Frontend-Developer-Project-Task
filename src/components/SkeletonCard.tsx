import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="product-card" style={{ cursor: 'default' }}>
      <div className="skeleton skeleton-img" />
      <div className="product-info">
        <div className="skeleton skeleton-text" style={{ width: '40%', height: '12px' }} />
        <div className="skeleton skeleton-text skeleton-title" style={{ marginTop: '8px' }} />
        <div 
          className="product-meta" 
          style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div className="skeleton skeleton-text skeleton-price" style={{ height: '18px' }} />
          <div className="skeleton skeleton-text" style={{ width: '30%', height: '14px' }} />
        </div>
      </div>
    </div>
  );
};

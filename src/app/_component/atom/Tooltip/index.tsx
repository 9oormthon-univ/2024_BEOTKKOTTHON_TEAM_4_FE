'use client'

import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: 'relative', display: 'inline-block', cursor: 'help' }}
    >
      {children}
      {isVisible && (
        <div style={{
          position: 'absolute',
          zIndex: 100,
          top: '100%',
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #ccc',
          padding: '10px',
          width: '300px',
          borderRadius: '5px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
        }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
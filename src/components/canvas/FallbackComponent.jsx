import React from 'react';
import './Fallback.css'

const FallbackComponent = () => {
  return (
    <div className="fallback-container">
      <p>Model could not be loaded.</p>
      {/* Optionally, include a placeholder image or other content */}
      {/* <img src="/path/to/placeholder-image.png" alt="Placeholder" /> */}
    </div>
  );
};

export default FallbackComponent;

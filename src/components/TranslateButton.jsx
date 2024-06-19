// src/components/TranslateButton.jsx
import React from 'react';

const TranslateButton = ({ onClick }) => {
  return (
    <div className="translate-button">
      <button onClick={onClick}>Translate</button>
    </div>
  );
};

export default TranslateButton;

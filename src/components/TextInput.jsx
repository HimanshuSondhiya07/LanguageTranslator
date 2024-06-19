// src/components/TextInput.jsx
import React from 'react';

const TextInput = ({ text, setText }) => {
  return (
    <div className="text-input">
      <label htmlFor="text">Enter Text:</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextInput;

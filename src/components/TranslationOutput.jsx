// src/components/TranslationOutput.jsx
import React from 'react';

const TranslationOutput = ({ translatedText }) => {
  return (
    <div className="translation-output">
      <label htmlFor="translated-text">Translated Text:</label>
      <textarea
        id="translated-text"
        value={translatedText}
        readOnly
      />
    </div>
  );
};

export default TranslationOutput;

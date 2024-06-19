// src/components/LanguageSelector.jsx
import React from 'react';

const LanguageSelector = ({
  sourceLanguage,
  setSourceLanguage,
  targetLanguage,
  setTargetLanguage,
  languages,
}) => {
  return (
    <div className="language-selector">
      <div>
        <label htmlFor="source-language">Source Language:</label>
        <select
          id="source-language"
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="target-language">Target Language:</label>
        <select
          id="target-language"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;

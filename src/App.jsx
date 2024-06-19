// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LanguageSelector from './components/LanguageSelector';
import TextInput from './components/TextInput';
import TranslateButton from './components/TranslateButton';
import TranslationOutput from './components/TranslationOutput';

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('id');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const options = {
        method: 'GET',
        url: 'https://text-translator2.p.rapidapi.com/getLanguages',
        headers: {
          'x-rapidapi-key': 'acf7360db2mshd6af464ba7a95f2p157a14jsn5b5224300c9c',
          'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setLanguages(response.data.data.languages);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []);

  const handleTranslate = async () => {
    const data = new FormData();
    data.append('source_language', sourceLanguage);
    data.append('target_language', targetLanguage);
    data.append('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'acf7360db2mshd6af464ba7a95f2p157a14jsn5b5224300c9c',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className="app">
      <h1>Universal Language Translator</h1>
      <LanguageSelector
        sourceLanguage={sourceLanguage}
        setSourceLanguage={setSourceLanguage}
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
        languages={languages}
      />
      <TextInput text={text} setText={setText} />
      <TranslateButton onClick={handleTranslate} />
      <TranslationOutput translatedText={translatedText} />
    </div>
  );
};

export default App;

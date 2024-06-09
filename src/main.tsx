import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_es from "./translations/es/global-es.json";
import global_en from "./translations/en/global-en.json";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

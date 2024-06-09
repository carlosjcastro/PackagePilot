import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_es from "./translations/es/global-es.json";
import global_en from "./translations/en/global-en.json";
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

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

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

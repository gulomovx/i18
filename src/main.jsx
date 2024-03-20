// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import './i18n'
import { useTranslation, initReactI18next } from "react-i18next";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

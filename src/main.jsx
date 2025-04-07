

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Styles globaux
import './app.css';    // Styles spécifiques aux composants
import App from './App.jsx';
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

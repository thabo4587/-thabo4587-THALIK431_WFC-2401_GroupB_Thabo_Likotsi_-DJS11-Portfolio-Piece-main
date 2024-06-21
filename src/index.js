import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import reportWebVitals from './reportWebVitals';
import App from './App'; // Import App




// Create a root using createRoot()
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

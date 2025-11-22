import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// HTML dosyasındaki 'root' id'li div'i bulur ve React'i oraya bağlar
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

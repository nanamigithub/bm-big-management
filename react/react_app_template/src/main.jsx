import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // 初始化 i18n 设置

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

// Проверяем что мы в VK окружении
if (typeof window !== 'undefined' && window.location.search.includes('vk_')) {
  // Инициализация только в VK
  bridge.send('VKWebAppInit')
    .then(() => console.log('VK Mini App initialized'))
    .catch((error) => console.log('VK init error:', error));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
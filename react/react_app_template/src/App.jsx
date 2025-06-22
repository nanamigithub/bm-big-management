import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from './router';
import './index.css';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <header>
          <h1>{t('app_title')}</h1>
        </header>
        <main>
          <Routes />
        </main>
        <footer>
          <p>{t('footer_text')}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

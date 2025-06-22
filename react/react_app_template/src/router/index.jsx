import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pages from './pages';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {pages.map((Page, index) => (
          <Route key={index} path={Page.path} element={<Page.component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;

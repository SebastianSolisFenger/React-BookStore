import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoriesPage from './pages/CategoriesPage';
import BooksPage from './pages/BooksPage';
import NoMatch from './pages/NoMatch';

const App = () => (
  <div className="grand-app-container">
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  </div>
);

export default App;

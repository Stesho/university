import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import BooksPage from './pages/books/BooksPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/books'} element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
